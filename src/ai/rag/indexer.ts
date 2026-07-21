import { loadKnowledge } from "./loader";
import { splitIntoChunks } from "./chunker";
import { createEmbedding } from "./embeddings";
import {
  addVector,
  clearVectors,
} from "./vector-store";

export async function buildKnowledgeBase() {
  clearVectors();

  const documents = await loadKnowledge();

  let totalChunks = 0;

  for (const document of documents) {
    const chunks = splitIntoChunks(
      document.content,
      document.source
    );

    for (const chunk of chunks) {
      const embedding =
        await createEmbedding(
          chunk.content
        );

      addVector({
        chunk,
        embedding,
      });

      totalChunks++;
    }
  }

  console.log(
    `✅ Indexed ${documents.length} documents (${totalChunks} chunks).`
  );
}