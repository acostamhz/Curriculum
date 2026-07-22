"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Menu } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const links = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <img
  src="/favicon.png"
  alt="Logo"
  width={42}
  height={42}
/>
</Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/acostamhz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/acostamhz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}