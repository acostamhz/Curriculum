import { buildKnowledgeBase } from "./indexer";

let initialization: Promise<void> | null = null;

// Se reintenta si falla (por ejemplo, por una API key ausente) en lugar de quedar vacío para siempre.
export function initializeKnowledgeBase() {
  if (!initialization) {
    initialization = buildKnowledgeBase().catch((error) => {
      initialization = null;
      throw error;
    });
  }

  return initialization;
}