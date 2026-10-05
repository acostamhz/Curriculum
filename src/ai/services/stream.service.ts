import { buildPrompt } from "../prompt/prompt-builder";
import { addMessage, getHistory } from "../memory/history";
import { streamGemini } from "../providers/gemini-stream.provider";
import { initializeKnowledgeBase } from "../rag/init";

export async function streamChat(
  sessionId: string,
  message: string,
  language: "en" | "es" = "en",
  isFirstReply = false,
) {
  await initializeKnowledgeBase();

  const history = getHistory(sessionId);

  const prompt = await buildPrompt(
    message,
    history,
    language,
    isFirstReply,
  );

  addMessage(sessionId, { role: "user", content: message });

  return streamGemini(prompt, (reply) => {
    addMessage(sessionId, { role: "assistant", content: reply });
  });
}