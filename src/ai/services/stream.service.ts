import { buildPrompt } from "../prompt/prompt-builder";
import { getHistory } from "../memory/history";
import { streamGemini } from "../providers/gemini-stream.provider";

export async function streamChat(
  sessionId: string,
  message: string
) {
  const history = getHistory(sessionId);

  const prompt = buildPrompt(
    message,
    history
  );

  return streamGemini(prompt);
}