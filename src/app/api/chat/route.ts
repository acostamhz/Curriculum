import { NextResponse } from "next/server";

import { chat } from "@/ai/services/conversation.service";

export async function POST(request: Request) {
  try {
    const {
      message,
      sessionId = "default",
    } = await request.json();

    const reply = await chat(
      sessionId,
      message
    );

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}