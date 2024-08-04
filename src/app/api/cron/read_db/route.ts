import { getVectorStore } from "@/lib/astradb";

export const revalidate = 0;

export async function GET() {
  const vectorStore = await getVectorStore();
  
  // Realizar una búsqueda simple para obtener todos los documentos
  const results = await vectorStore.similaritySearch("", 10);  // El número 1000 es el límite de documentos a recuperar

  console.log('Documentos en la colección:', results);
  
  // Extraer información relevante de los resultados
  const documents = results.map(result => ({
    pageContent: result.pageContent,
    metadata: result.metadata
  }));

  return Response.json({ data: documents });
}