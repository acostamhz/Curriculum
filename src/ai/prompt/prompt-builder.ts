import { ChatMessage } from "../memory/types";

import { systemPrompt } from "../system-prompt";
import { buildPortfolioContext } from "../portfolio-context";

import { searchKnowledge } from "../rag/search";

export async function buildPrompt(
  message: string,
  history: ChatMessage[],
  language: "en" | "es" = "en",
  isFirstReply = false,
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
  const responseGuidance = isFirstReply
    ? "This is the first assistant response in this conversation. Begin with a brief greeting identifying yourself as June, Jhoan Camilo's AI assistant, then answer the visitor's current question."
    : "This is NOT the first assistant response. Do not greet, do not say hello and do not introduce yourself (not even as June); ignore any greeting in the conversation history and answer the visitor's current question directly.";

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