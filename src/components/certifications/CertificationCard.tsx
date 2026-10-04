"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

interface Props {
  certification: {
    title: string;
    issuer: string;
    year: string;
    credential: string;
  };

  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: Props) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: .45,
        delay: index * .1,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-blue-500/30
      "
    >
      <Award className="mb-6 h-10 w-10 text-blue-400" />

      <h3 className="text-2xl font-bold">
        {certification.title}
      </h3>

      <p className="mt-3 text-zinc-400">
        {certification.issuer}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
          {certification.year}
        </span>

        <Link
          href={certification.credential}
          className="flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
        >
          {language === "es" ? "Ver certificado" : "Credential"}

          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}