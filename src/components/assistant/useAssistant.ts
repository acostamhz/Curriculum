"use client";

import { useRef, useState } from "react";

import { UIMessage } from "./types";

export function useAssistant() {
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "👋 Hi! I'm Jhoan's AI Assistant. Ask me anything about my experience, projects or skills.",
    },
  ]);

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  async function sendMessage(message: string) {
    if (!message.trim() || isLoading) return;

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
          sessionId: "portfolio",
          message,
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

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, {
          stream: true,
        });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: msg.content + chunk,
                }
              : msg
          )
        );
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.log("Generation stopped.");
      } else {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "❌ Sorry, something went wrong while contacting the AI.",
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
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    stopGeneration,
  };
}