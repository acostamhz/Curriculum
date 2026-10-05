"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePortfolio } from "@/i18n/LanguageProvider";

export default function HeroPhoto() {
  const portfolio = usePortfolio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex w-full justify-center"
    >
      <div className="hero-profile-card relative flex w-full max-w-[860px] flex-col items-center gap-6 overflow-hidden rounded-[28px] border border-white/10 p-5 text-center sm:flex-row sm:gap-10 sm:p-6 sm:text-left">
        <div className="relative h-[200px] w-[165px] shrink-0 overflow-hidden rounded-[20px] sm:h-[250px] sm:w-[210px]">
          <Image
            src="/profile.jpg"
            alt={portfolio.name}
            fill
            priority
            sizes="(max-width: 640px) 165px, 210px"
            className="object-cover object-[54%_center]"
          />
        </div>
        <div className="min-w-0">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary sm:mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {portfolio.location}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">{portfolio.name}</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-8">
            {portfolio.title} · {portfolio.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}