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

  return `
${systemPrompt}

Reply in ${language === "es" ? "Spanish" : "English"}, matching the language selected by the visitor.

${buildPortfolioContext()}

Relevant knowledge:

${knowledge}

Conversation history:

${historyText}

Current user question:

${message}
`;
}