export interface Chunk {
  id: string;
  source: string;
  content: string;
}

interface ChunkOptions {
  chunkSize?: number;
  overlap?: number;
}

export function splitIntoChunks(
  text: string,
  source: string,
  options: ChunkOptions = {}
): Chunk[] {
  const chunkSize = options.chunkSize ?? 1000;
  const overlap = options.overlap ?? 200;

  const chunks: Chunk[] = [];

  let start = 0;

  while (start < text.length) {
    const end = Math.min(
      start + chunkSize,
      text.length
    );

    chunks.push({
      id: crypto.randomUUID(),
      source,
      content: text.slice(start, end),
    });

    start += chunkSize - overlap;
  }

  return chunks;
}