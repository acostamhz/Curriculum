"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";


import { UIMessage } from "./types";

interface Props {
  message: UIMessage;
}

export default function Message({
  message,
}: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[80%]
          rounded-2xl
          px-5
          py-3
          text-sm
          leading-7
          overflow-hidden
          ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-white/10 bg-white/5 text-zinc-200"
          }
        `}
      >
        {isUser ? (
          message.content
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}