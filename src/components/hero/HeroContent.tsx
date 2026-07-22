"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldCheck, Server } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import HeroBadges from "./HeroBadges";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col"
    >
      <Badge
      variant="outline"
      className="mb-6 w-fit rounded-full px-6 py-6 text-base font-medium leading-none"
        >
      Available for new opportunities
    </Badge>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-8xl"
      >
        Jhoan Camilo
        <br />
        Acosta Galindez
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
      >
        {portfolio.description}
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-4">
  <Link
    href="https://github.com/acostamhz"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="gap-2 rounded-full">
      {portfolio.buttons.projects}
      <ArrowRight className="h-4 w-4" />
    </Button>
  </Link>

  <Link href="#contact">
    <Button
      size="lg"
      variant="outline"
      className="rounded-full"
    >
      {portfolio.buttons.contact}
    </Button>
  </Link>
</div>

      <HeroBadges />
    </motion.div>
  );
}