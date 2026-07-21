"use client";

import { portfolio } from "@/data/portfolio";
import CertificationsHeader from "./CertificationsHeader";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <CertificationsHeader />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {portfolio.certifications.items.map((item, index) => (
            <CertificationCard
              key={item.title}
              certification={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}