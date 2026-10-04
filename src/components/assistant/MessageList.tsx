"use client";

import { useEffect, useRef } from "react";

import { UIMessage } from "./types";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

interface Props {
  messages: UIMessage[];
  isLoading: boolean;
}

export default function MessageList({
  messages,
  isLoading,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Evita hacer scroll en el primer render
  const firstRender = useRef(true);
  const previousCount = useRef(messages.length);

  useEffect(() => {
    // Cambiar de idioma reemplaza el saludo sin agregar mensajes: no hacer scroll
    const countChanged = previousCount.current !== messages.length;
    previousCount.current = messages.length;

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (!countChanged && !isLoading) return;

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  return (
    <>
      <div className="space-y-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

        {isLoading && <TypingIndicator />}
      </div>

      <div ref={bottomRef} />
    </>
  );
}