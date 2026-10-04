"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import HeroBadges from "./HeroBadges";

export default function HeroContent() {
  const { portfolio, ui } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex w-full flex-col items-center"
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-primary" />
        {ui.hero.availability}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="max-w-5xl text-[clamp(2.2rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[104px]"
      >
        <span className="block">{ui.hero.welcome}</span>
        <span className="hero-title-highlight mt-2 inline-block">{ui.hero.curriculum}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
      >
        {portfolio.description}
      </motion.p>

      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          href="https://github.com/acostamhz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="hero-primary-button gap-4 rounded-full">
            {ui.hero.viewProjects}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </Link>

        <Link href="#contact">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
          >
            {ui.hero.contact}
          </Button>
        </Link>
      </div>

      <HeroBadges />
    </motion.div>
  );
}