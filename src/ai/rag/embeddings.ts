import { ai } from "../client";

export async function createEmbedding(text: string) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
  });

  return response.embeddings?.[0]?.values ?? [];
}