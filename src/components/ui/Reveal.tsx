"use client";

import { type ReactNode, type CSSProperties } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce, ease } from "@/lib/animations";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  variants?: Variants;
  as?: "div" | "p" | "span" | "li" | "h2" | "h3";
};

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion.create(as);

  if (reduced) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay, duration: 0.8, ease: ease.luxury } : undefined}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
