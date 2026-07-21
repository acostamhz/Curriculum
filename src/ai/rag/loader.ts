import fs from "node:fs/promises";
import path from "node:path";

export interface KnowledgeDocument {
  source: string;
  content: string;
}

const KNOWLEDGE_DIR = path.join(
  process.cwd(),
  "knowledge"
);

async function walk(
  dir: string
): Promise<string[]> {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(
        dir,
        entry.name
      );

      if (entry.isDirectory()) {
        return walk(fullPath);
      }

      return fullPath;
    })
  );

  return files.flat();
}

export async function loadKnowledge(): Promise<
  KnowledgeDocument[]
> {
  const files = await walk(KNOWLEDGE_DIR);

  const markdownFiles = files.filter((file) =>
    file.endsWith(".md")
  );

  const documents: KnowledgeDocument[] = [];

  for (const file of markdownFiles) {
    const content = await fs.readFile(
      file,
      "utf8"
    );

    documents.push({
      source: path.relative(
        KNOWLEDGE_DIR,
        file
      ),
      content,
    });
  }

  return documents;
}