"use client";

import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";
import ContactCTA from "./ContactCTA";

import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6">

        <ContactHeader />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
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
    </section>
  );
}