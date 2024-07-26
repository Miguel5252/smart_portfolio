import { getVectorStore } from "@/lib/astradb";

export async function GET() {
  await getVectorStore();
  console.log('trabajo cron: Lectura base de datos astra')
  return Response.json({ data: true});
}