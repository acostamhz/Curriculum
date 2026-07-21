import { createEmbedding } from "./embeddings";
import { getVectors } from "./vector-store";

function cosineSimilarity(
  a: number[],
  b: number[]
): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function searchKnowledge(
  question: string,
  topK = 5
): Promise<string> {
  const embedding = await createEmbedding(question);

  const results = getVectors()
    .map((item) => ({
      score: cosineSimilarity(
        embedding,
        item.embedding
      ),
      chunk: item.chunk,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return results
    .map(
      (item) =>
        `SOURCE: ${item.chunk.source}\n${item.chunk.content}`
    )
    .join("\n\n----------------------\n\n");
}