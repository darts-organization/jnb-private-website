"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "@/lib/animations";
import { AnimatedSquare } from "@/components/ui/AnimatedSquare";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.luxury },
  },
};

const lineExpand = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: ease.luxury },
  },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest px-6 text-center">
      {/* Background decorative elements */}
      <AnimatedSquare
        position="top-right"
        color="#D1BA6F"
        delay={0.8}
        size="h-16 w-16 md:h-24 md:w-24"
      />
      <AnimatedSquare
        position="bottom-left"
        color="#A05A53"
        delay={1}
        size="h-16 w-16 md:h-24 md:w-24"
      />

      {/* Large decorative 404 in background */}
      <motion.span
        className="pointer-events-none absolute select-none font-display text-[12rem] sm:text-[18rem] md:text-[24rem] text-cream/2 leading-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: ease.luxury }}
      >
        404
      </motion.span>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Brandmark */}
        <motion.div variants={fadeUp}>
          <Image
            src="/images/Brandmark_cream.svg"
            alt=""
            width={80}
            height={80}
            className="mb-10 h-14 w-14 opacity-15"
            aria-hidden="true"
          />
        </motion.div>

        {/* Label */}
        <motion.p
          variants={fadeUp}
          className="mb-6 font-body text-[10px] font-medium uppercase tracking-[0.4em] text-cream/30"
        >
          Page Not Found
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-4 font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight"
        >
          Nothing here
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={lineExpand}
          className="mb-8 h-px w-16 bg-cream/15 origin-center"
        />

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mb-12 max-w-sm font-body text-sm sm:text-base text-cream/40 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/"
          variants={fadeUp}
          className="shimmer-btn inline-block ring-[1.5px] ring-inset ring-cream bg-transparent px-10 py-4 font-body text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-cream hover:text-forest"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          Return Home
        </motion.a>
      </motion.div>
    </div>
  );
}
