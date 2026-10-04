"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useLanguage } from "@/i18n/LanguageProvider";

const links = [
  { key: "about", href: "#about" },
  { key: "journey", href: "#timeline" },
  { key: "projects", href: "#projects" },
  { key: "stack", href: "#stack" },
  { key: "interests", href: "#interests" },
  { key: "assistant", href: "#assistant" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, ui } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`liquid-glass mx-auto flex h-[68px] w-full max-w-[1400px] items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          scrolled ? "liquid-glass-scrolled" : ""
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={ui.navigation.home}>
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary">
            <Image
              src="/profile.jpg"
              alt=""
              fill
              sizes="40px"
              className="object-cover object-top"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-semibold text-foreground">Jhoan Camilo</span>
            <span className="mt-1 text-xs text-muted-foreground">{ui.navigation.brandRole}</span>
          </span>
        </Link>

        <nav
          aria-label={ui.navigation.main}
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-4 xl:gap-6">
            {links.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground xl:text-sm"
                >
                  {ui.navigation[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/acostamhz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/acostamhz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
          <LanguageSwitch />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? ui.navigation.menuClose : ui.navigation.menuOpen}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="rounded-xl p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="liquid-glass mx-auto mt-2 max-w-[1400px] rounded-3xl lg:hidden">
          <nav aria-label={ui.navigation.mobile} className="mx-auto max-w-7xl px-6 py-5">
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
                  >
                    {ui.navigation[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );

  function LanguageSwitch() {
    return (
      <div
        aria-label={ui.navigation.language}
        className="flex items-center gap-1 rounded-full border border-white/15 p-1"
      >
        {(["en", "es"] as const).map((option) => (
          <button
            key={option}
            type="button"
            lang={option}
            aria-pressed={language === option}
            onClick={() => setLanguage(option)}
            className={`min-w-9 rounded-full px-2 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
              language === option
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}