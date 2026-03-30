"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { ease } from "@/lib/animations";

const SECTION_IDS = ["about", "services", "philosophy", "leadership", "contact"];

function useScrollSpy() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }

          // Pick the section with the highest visibility
          let best = "";
          let bestRatio = 0;
          visible.forEach((ratio, key) => {
            if (ratio >= bestRatio) {
              bestRatio = ratio;
              best = key;
            }
          });
          setActive(best);
        },
        { threshold: [0, 0.2, 0.4, 0.6], rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isSubPage = pathname !== `/${locale}` && pathname !== `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const navLinks = [
    { label: t("about"), href: "#about", id: "about" },
    { label: t("services"), href: "#services", id: "services" },
    { label: t("philosophy"), href: "#philosophy", id: "philosophy" },
    { label: t("leadership"), href: "#leadership", id: "leadership" },
    { label: t("contact"), href: "#contact", id: "contact" },
  ];

  if (isSubPage) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-5">
          <a
            href={`/${locale}`}
            className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-forest/60 transition-colors duration-300 hover:text-forest"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {t("back")}
          </a>
          <div className="text-forest">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12 py-5">
          {/* Logo */}
          <a href="#" className="relative z-[60]">
            <Image
              src={
                menuOpen || scrolled
                  ? "/images/Main_forest.svg"
                  : "/images/Main.svg"
              }
              alt="JNB Private"
              width={610}
              height={495}
              className="h-10 w-auto sm:h-12 transition-opacity duration-300"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-forest"
                        : "text-forest/40 hover:text-forest/70"
                      : isActive
                        ? "text-cream"
                        : "text-cream/40 hover:text-cream/70"
                  }`}
                >
                  {link.label}
                  {/* Active indicator — subtle underline */}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                      scrolled ? "bg-forest" : "bg-cream"
                    } ${isActive ? "w-full" : "w-0"}`}
                  />
                </a>
              );
            })}
            <div className={scrolled ? "text-forest" : "text-cream"}>
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative z-[60] p-2 transition-colors duration-300 ${
              menuOpen || scrolled ? "text-forest" : "text-cream"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col justify-center items-center w-6 h-5">
              <span
                className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out ${
                  menuOpen
                    ? "translate-y-[0.5px] rotate-45"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ease-out ${
                  menuOpen
                    ? "-translate-y-[0.5px] -rotate-45"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[55] bg-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: ease.luxury }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 text-forest transition-opacity hover:opacity-60"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-2xl sm:text-3xl transition-opacity hover:opacity-60 ${
                    activeSection === link.id
                      ? "text-forest"
                      : "text-forest/50"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.5,
                    ease: ease.luxury,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="mt-6 text-forest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
