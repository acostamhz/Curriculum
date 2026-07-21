"use client";

import AssistantHeader from "./AssistantHeader";
import ChatWindow from "./ChatWindow";

export default function Assistant() {
  return (
    <section
      id="assistant"
      className="relative overflow-hidden py-32"
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,.08),transparent_70%)]
        "
      />

      <div className="mx-auto max-w-6xl px-6">

        <AssistantHeader />

        <div className="mt-20">
          <ChatWindow />
        </div>

      </div>
    </section>
  );
}