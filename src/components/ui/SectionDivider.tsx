"use client";

import { motion } from "framer-motion";
import { ease, viewportOnce } from "@/lib/animations";

type Props = {
  bg?: "cream" | "forest";
};

export function SectionDivider({ bg = "cream" }: Props) {
  const lineColor = bg === "cream" ? "bg-forest/8" : "bg-cream/8";
  const accentColor = bg === "cream" ? "bg-investment" : "bg-investment/60";

  return (
    <div className={`${bg === "cream" ? "bg-cream" : "bg-forest"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="relative flex items-center justify-center">
          {/* Full-width subtle line */}
          <motion.div
            className={`h-px w-full ${lineColor}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: ease.luxury }}
          />
          {/* Gold accent center diamond */}
          <motion.div
            className="absolute flex items-center gap-3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.6, ease: ease.luxury }}
          >
            <div className={`h-px w-6 ${accentColor}`} />
            <div
              className={`h-1.5 w-1.5 rotate-45 ${accentColor}`}
            />
            <div className={`h-px w-6 ${accentColor}`} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
