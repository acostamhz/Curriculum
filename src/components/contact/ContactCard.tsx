"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useLanguage } from "@/i18n/LanguageProvider";

interface Props {
  item: {
    title: string;
    value: string;
    href: string;
  };

  index: number;
}

export default function ContactCard({
  item,
  index,
}: Props) {
  const { language } = useLanguage();

  const icons = {
    Email: Mail,
    GitHub: FaGithub,
    LinkedIn: FaLinkedinIn,
    Location: MapPin,
    Ubicación: MapPin,
  };

  const Icon =
    icons[item.title as keyof typeof icons] ?? Mail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: .45,
        delay: index * .12,
      }}
    >
      <Link
        href={item.href}
        target={item.href.startsWith("mailto:") ? undefined : "_blank"}
        className="
          group
          flex
          items-center
          justify-between
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-blue-500/30
          hover:bg-white/[0.05]
        "
      >
        <div className="flex items-center gap-5">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-500/10
            "
          >
            <Icon className="text-blue-400" />
          </div>

          <div>
            <h3 className="font-semibold">
                {item.title === "Location" && language === "es"
                  ? "Ubicación"
                  : item.title === "Ubicación" && language === "en"
                    ? "Location"
                    : item.title}
            </h3>

            <p className="mt-1 text-zinc-400">
              {item.value}
            </p>
          </div>

        </div>

        <ArrowUpRight
          className="
            text-zinc-500
            transition
            group-hover:text-blue-400
          "
        />

      </Link>
    </motion.div>
  );
}