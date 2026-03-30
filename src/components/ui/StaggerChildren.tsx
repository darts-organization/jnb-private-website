"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
