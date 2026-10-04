"use client";

import RevealSection from "@/components/ui/RevealSection";

import AssistantHeader from "./AssistantHeader";
import ChatWindow from "./ChatWindow";

export default function Assistant() {
  return (
    <RevealSection
      id="assistant"
      className="relative overflow-hidden py-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        <AssistantHeader />

        <div className="mt-12">
          <ChatWindow />
        </div>

      </div>
    </RevealSection>
  );
}