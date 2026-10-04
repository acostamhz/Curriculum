"use client";

import RevealSection from "@/components/ui/RevealSection";

import { usePortfolio } from "@/i18n/LanguageProvider";
import CertificationsHeader from "./CertificationsHeader";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  const portfolio = usePortfolio();

  return (
    <RevealSection
      id="certifications"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <CertificationsHeader />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {portfolio.certifications.items.map((item, index) => (
            <CertificationCard
              key={item.title}
              certification={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}