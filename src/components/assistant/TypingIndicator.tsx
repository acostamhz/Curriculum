"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
        "
      >
        <span
          className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-zinc-300
            [animation-delay:-0.3s]
          "
        />

        <span
          className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-zinc-300
            [animation-delay:-0.15s]
          "
        />

        <span
          className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-zinc-300
          "
        />
      </div>
    </div>
  );
}