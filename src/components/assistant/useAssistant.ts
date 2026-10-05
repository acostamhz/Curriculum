"use client";

import { useRef, useState } from "react";

import { UIMessage } from "./types";

import { parseTools } from "@/assistant/parser";
import { runTools } from "@/assistant/run-tools";

export function useAssistant(
  language: "en" | "es",
  greeting: string,
  errorMessage: string,
) {
  const [messages, setMessages] = useState<UIMessage[]>(() => [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: greeting,
    },
  ]);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  async function sendMessage(message: string) {
    if (!message.trim() || isLoading) return;

    const isFirstReply = !messages.some((item) => item.role === "user");

    const userMessage: UIMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setIsLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const response = await fetch("/api/chat-stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          language,
          isFirstReply,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      if (!response.body) {
        throw new Error("No response body.");
      }

      const assistantId = crypto.randomUUID();

      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content: "",
        },
      ]);

      const reader = response.body.getReader();

      const decoder = new TextDecoder();

      let fullResponse = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        fullResponse += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: fullResponse,
                }
              : msg
          )
        );
      }

      const parsed = parseTools(fullResponse);

      if (parsed.tools.length > 0) {
        runTools(parsed.tools);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: parsed.text,
                }
              : msg
          )
        );
      }
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        console.log("Generation stopped.");
      } else {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: errorMessage,
          },
        ]);
      }
    } finally {
      controllerRef.current = null;
      setIsLoading(false);
    }
  }

  function stopGeneration() {
    controllerRef.current?.abort();

    controllerRef.current = null;

    setIsLoading(false);
  }

  return {
    messages:
      messages.length === 1 && messages[0].role === "assistant"
        ? [{ ...messages[0], content: greeting }]
        : messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    stopGeneration,
  };
}