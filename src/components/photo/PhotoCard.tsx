"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-[380px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[34px] bg-blue-500/20 blur-3xl" />

      {/* Card */}

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="relative h-[470px] w-full">
          <Image
            src="/profile.jpg"
            alt="Jhoan Camilo Acosta"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="space-y-5 p-7">
          <div>
            <h3 className="text-xl font-semibold">
              Jhoan Camilo Acosta
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Software Engineer · Cybersecurity · AI
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
            <Metric value="12+" label="Projects" />

            <Metric value="3" label="Certifications" />

            <Metric value="1" label="Startup" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold">{value}</p>

      <p className="mt-1 text-xs text-zinc-500">
        {label}
      </p>
    </div>
  );
}