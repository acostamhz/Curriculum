import { NextResponse } from "next/server";

import { parseChatRequest } from "@/ai/security";
import { chat } from "@/ai/services/conversation.service";

export async function POST(request: Request) {
  const parsed = await parseChatRequest(request);

  if (!parsed.ok) return parsed.response;

  const { message, language, sessionId, setCookie } = parsed.data;

  try {
    const reply = await chat(sessionId, message, language);
    const response = NextResponse.json({ reply });

    if (setCookie) response.headers.append("Set-Cookie", setCookie);

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "The assistant is unavailable right now." },
      { status: 500 },
    );
  }
}