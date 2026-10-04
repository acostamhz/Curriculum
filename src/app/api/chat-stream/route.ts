import { parseChatRequest } from "@/ai/security";
import { streamChat } from "@/ai/services/stream.service";

export async function POST(request: Request) {
  const parsed = await parseChatRequest(request);

  if (!parsed.ok) return parsed.response;

  const { message, language, sessionId, setCookie } = parsed.data;

  try {
    const result = await streamChat(sessionId, message, language);
    const response = result.toTextStreamResponse();

    if (setCookie) response.headers.append("Set-Cookie", setCookie);

    return response;
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "The assistant is unavailable right now." },
      { status: 500 },
    );
  }
}