"use client";

import RevealSection from "@/components/ui/RevealSection";

import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";
import ContactCTA from "./ContactCTA";

import { usePortfolio } from "@/i18n/LanguageProvider";

export default function Contact() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="contact"
      className="relative overflow-hidden py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ContactHeader />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolio.contact.items.map((item, index) => (
            <ContactCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        <ContactCTA />

      </div>
    </RevealSection>
  );
}