import { getVectorStore } from "@/lib/astradb";

export const revalidate = 0;

export async function GET() {
  const db = await getVectorStore();
  console.log('prueba', db)
  return Response.json({ data: true});
}