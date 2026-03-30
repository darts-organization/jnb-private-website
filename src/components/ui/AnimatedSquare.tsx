"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

type Props = {
  position: "top-right" | "bottom-left";
  color: string;
  delay?: number;
  size?: string;
};

export function AnimatedSquare({
  position,
  color,
  delay = 0.4,
  size = "h-16 w-16 md:h-20 md:w-20",
}: Props) {
  const reduced = useReducedMotion();

  const positionClasses =
    position === "top-right"
      ? "absolute top-0 right-0 origin-top-right"
      : "absolute bottom-0 left-0 origin-bottom-left";

  if (reduced) {
    return (
      <div
        className={`${positionClasses} ${size}`}
        style={{ backgroundColor: color }}
      />
    );
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${positionClasses} ${size}`}
      style={{ backgroundColor: color }}
    />
  );
}
