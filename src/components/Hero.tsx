"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollIndicator } from "./ui/ScrollIndicator";
import { ease } from "@/lib/animations";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: ease.luxury } },
};

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.6, ease: ease.luxury } },
};

const brandmarkReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.5, ease: ease.luxury },
  },
};

const logotypeReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.4, ease: ease.luxury },
  },
};

export function Hero() {
  const t = useTranslations("hero");
  const words = t("headline").split(" ");

  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-forest">
      {/* Large background brandmark — ghosted */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        variants={brandmarkReveal}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/Brandmark_cream.svg"
          alt=""
          width={800}
          height={800}
          className="h-auto w-[min(45vw,480px)] opacity-[0.03]"
          aria-hidden="true"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 lg:px-12 pt-16 sm:pt-20">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Logotype — brand identity instead of text tagline */}
          <motion.div variants={logotypeReveal} className="mb-6 sm:mb-8 md:mb-12 flex justify-center">
            <Image
              src="/images/Logotype_cream.svg"
              alt="JNB Private"
              width={593}
              height={201}
              className="h-5 sm:h-6 md:h-7 w-auto opacity-40"
              priority
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={lineExpand}
            className="mx-auto mb-6 sm:mb-8 md:mb-12 h-px w-12 bg-cream/12 origin-center"
          />

          {/* Headline — word-by-word */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-cream leading-[1.08] mb-6 sm:mb-8 md:mb-10">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Divider */}
          <motion.div
            variants={lineExpand}
            className="mx-auto mb-6 sm:mb-8 md:mb-10 h-px w-12 bg-cream/12 origin-center"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-6 sm:mb-8 md:mb-12 max-w-lg font-body text-sm sm:text-base md:text-lg text-cream/50 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {/* CTA — minimal, barely-there border */}
          <motion.div variants={fadeUp}>
            <motion.a
              href="#contact"
              className="shimmer-btn inline-block ring-1 ring-inset ring-cream/20 bg-transparent text-cream hover:bg-cream hover:text-forest hover:ring-cream px-8 py-3.5 sm:px-12 sm:py-4 md:px-14 md:py-5 font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] transition-all duration-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {t("cta")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 pb-6 sm:pb-8 flex justify-center shrink-0">
        <ScrollIndicator />
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest to-transparent" />
    </section>
  );
}
