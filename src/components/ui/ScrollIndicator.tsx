"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/animations";

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2, ease: ease.luxury }}
    >
      <span className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/40">
        Scroll
      </span>
      <motion.div
        className="h-10 w-px bg-gradient-to-b from-cream/40 to-transparent"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
}
