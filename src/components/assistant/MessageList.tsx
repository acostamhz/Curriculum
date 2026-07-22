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

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

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