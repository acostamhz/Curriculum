import { Chunk } from "./chunker";

export interface VectorDocument {
  chunk: Chunk;
  embedding: number[];
}

const vectors: VectorDocument[] = [];

export function addVector(document: VectorDocument) {
  vectors.push(document);
}

export function getVectors() {
  return vectors;
}

export function clearVectors() {
  vectors.length = 0;
}