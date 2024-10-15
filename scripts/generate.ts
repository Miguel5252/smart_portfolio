import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

async function generateEmbeddings() {
  const vectorStore = await getVectorStore();

  (await getEmbeddingsCollection()).deleteMany({});

  // LEER ARCHIVOS HTML
  const web_loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  const web_docs = (await web_loader.load())
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url: url, source: "web", pdf: null },
      };
    });

  // LEER ARCHIVOS PDF
  const pdf_loader = new PDFLoader(
    "./src/assets/miguel_santaolalla_frontend_cv.pdf",
  );
  const pdf_docs = (await pdf_loader.load()).map((doc) => {
    return {
      pageContent: doc.pageContent,
      metadata: {
        ...doc.metadata,
        url: "https://miguelsantaolalla-smart-portfolio.vercel.app/downloads/miguel_santaolalla_frontend_cv.pdf",
        source:
          "https://miguelsantaolalla-smart-portfolio.vercel.app/downloads/miguel_santaolalla_frontend_cv.pdf",
      },
    };
  });

  //Juntar DOCS y hacerles el Split
  const docs = [...web_docs, ...pdf_docs];
  const web_splitter = RecursiveCharacterTextSplitter.fromLanguage("html", {
    chunkSize: 2000,
    chunkOverlap: 100,
  });
  const splittedDocs = await web_splitter.splitDocuments(docs);

  // Guardar en ASTRA

  await vectorStore.addDocuments(splittedDocs);
}

generateEmbeddings();
