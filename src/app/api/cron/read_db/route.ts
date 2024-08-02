import { getVectorStore } from "@/lib/astradb";

export async function GET() {
  const db = await getVectorStore();
  console.log('prueba', db)
  return Response.json({ data: true});
}