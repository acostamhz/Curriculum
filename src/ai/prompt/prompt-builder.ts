import { ChatMessage } from "../memory/types";

import { systemPrompt } from "../system-prompt";
import { buildPortfolioContext } from "../portfolio-context";

import { searchKnowledge } from "../rag/search";

export async function buildPrompt(
  message: string,
  history: ChatMessage[]
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

${buildPortfolioContext()}

Relevant knowledge:

${knowledge}

Conversation history:

${historyText}

Current user question:

${message}
`;
}