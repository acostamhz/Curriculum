import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function GET() {
  try {
    const response = await client.models.generateContent({
      model: "gemini-flash-latest",
      contents: "Say hello",
    });

    return NextResponse.json({
      ok: true,
      text: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}