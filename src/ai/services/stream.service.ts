import { buildPrompt } from "../prompt/prompt-builder";
import { getHistory } from "../memory/history";
import { streamGemini } from "../providers/gemini-stream.provider";
import { initializeKnowledgeBase } from "../rag/init";

export async function streamChat(
  sessionId: string,
  message: string
) {
  await initializeKnowledgeBase();

  const history = getHistory(sessionId);

  const prompt = await buildPrompt(
    message,
    history
  );

  return streamGemini(prompt);
}