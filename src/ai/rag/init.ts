import { buildKnowledgeBase } from "./indexer";

let initialized = false;

export async function initializeKnowledgeBase() {
  if (initialized) {
    return;
  }

  initialized = true;

  await buildKnowledgeBase();
}