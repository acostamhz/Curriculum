import { ChatMessage } from "../memory/types";

import { systemPrompt } from "../system-prompt";
import { buildPortfolioContext } from "../portfolio-context";

import { searchKnowledge } from "../rag/search";

export async function buildPrompt(
  message: string,
  history: ChatMessage[],
  language: "en" | "es" = "en",
): Promise<string> {
  const knowledge = await searchKnowledge(
    message
  );

  const historyText = history
    .map(
      (item) => `
${item.role.toUpperCase()}:

${item.content}
`
    )
    .join("\n");
  const responseGuidance = history.some((item) => item.role === "assistant")
    ? "This is not the first assistant response in this conversation. Do not greet or introduce yourself; answer the visitor's current question directly."
    : "This is the first assistant response in this conversation. Begin with a brief greeting identifying yourself as June, Jhoan Camilo's AI assistant, then answer the visitor's current question.";

  return `
${systemPrompt}

Reply in ${language === "es" ? "Spanish" : "English"}, matching the language selected by the visitor.
${responseGuidance}

${buildPortfolioContext()}

Relevant knowledge:

${knowledge}

Conversation history:

${historyText}

Current user question:

${message}
`;
}