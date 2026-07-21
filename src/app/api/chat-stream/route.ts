import { streamChat } from "@/ai/services/stream.service";

export async function POST(request: Request) {
  const {
    sessionId = "default",
    message,
  } = await request.json();

  const result = await streamChat(
    sessionId,
    message
  );

  return result.toTextStreamResponse();
}