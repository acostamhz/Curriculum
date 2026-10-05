"use client";

import {
  Send,
  Sparkles,
  Square,
} from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";

import { useAssistant } from "./useAssistant";
import MessageList from "./MessageList";

export default function ChatWindow() {
  const { language, portfolio, ui } = useLanguage();
  const {
    messages,
    input,
    setInput,
    sendMessage,
    stopGeneration,
    isLoading,
  } = useAssistant(language, ui.assistant.greeting, ui.assistant.error);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
          <Sparkles className="text-blue-400" />
        </div>

        <div>
          <h3 className="font-bold">
            {ui.assistant.title}
          </h3>

          <p className="text-sm text-zinc-400">
            {ui.assistant.subtitle}
          </p>
        </div>
      </div>

      {/* Messages */}

      <div
        className="
          mt-10
          h-[420px]
          overflow-y-auto
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-6
        "
      >
        <MessageList
          messages={messages}
          isLoading={isLoading}
        />
      </div>

      {/* Suggestions */}

      <div className="mt-6 flex flex-wrap gap-3">
        {portfolio.assistant.suggestions.map((item) => (
          <button
            key={item}
            onClick={() => sendMessage(item)}
            disabled={isLoading}
            className="
              rounded-full
              border
              border-white/10
              px-5
              py-3
              text-sm
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-500/10
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {item}
          </button>
        ))}
      </div>

      {/* Input */}

      <div className="mt-8 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey &&
              !isLoading
            ) {
              e.preventDefault();
              sendMessage(input);
            }
          }}
          placeholder={ui.assistant.placeholder}
          disabled={isLoading}
          className="
            flex-1
            rounded-2xl
            border
            border-white/10
            bg-transparent
            px-6
            py-5
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        />

        {isLoading ? (
          <button
            onClick={stopGeneration}
            className="
              flex
              items-center
              justify-center
              rounded-2xl
              bg-red-600
              px-6
              text-white
              transition-all
              duration-300
              hover:bg-red-500
            "
            title={ui.assistant.stop}
          >
            <Square size={18} />
          </button>
        ) : (
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="
              flex
              items-center
              justify-center
              rounded-2xl
              bg-primary
              px-6
              text-primary-foreground
              transition-all
              duration-300
              hover:bg-primary/85
              disabled:cursor-not-allowed
              disabled:bg-zinc-700
              disabled:text-white
              disabled:opacity-50
            "
            title={ui.assistant.send}
          >
            <Send size={20} />
          </button>
        )}
      </div>
    </div>
  );
}