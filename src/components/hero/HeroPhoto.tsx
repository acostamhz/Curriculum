"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Blue Glow */}
        <div className="absolute inset-0 rounded-[38px] bg-blue-500/20 blur-3xl" />

        {/* Glass Card */}
        <div
          className="
            relative
            h-[520px]
            w-[360px]
            overflow-hidden
            rounded-[38px]
            border
            border-white/10
            bg-white/5
            shadow-2xl
            backdrop-blur-xl
        "
        >
          <Image
            src="/profile.jpg"
            alt="Jhoan Camilo Acosta"
            fill
            priority
            className="object-cover object-[54%_center]"
          />
        </div>

      </div>
    </motion.div>
  );
}