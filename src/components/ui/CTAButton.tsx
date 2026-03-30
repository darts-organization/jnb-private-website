"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  emailSubject: string;
  variant?: "primary" | "light";
};

const EMAIL = "concierge@jnb-private.com";

export function CTAButton({
  label,
  emailSubject,
  variant = "primary",
}: Props) {
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}`;

  const classes =
    variant === "primary"
      ? "ring-forest bg-forest text-cream hover:bg-forest-light hover:shadow-[0_4px_24px_rgba(25,40,26,0.25)]"
      : "ring-cream bg-transparent text-cream hover:bg-cream hover:text-forest hover:shadow-[0_4px_24px_rgba(245,237,223,0.15)]";

  return (
    <motion.a
      href={href}
      className={`shimmer-btn inline-block ring-[1.5px] ring-inset px-8 py-3.5 sm:px-10 sm:py-4 font-body text-xs sm:text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${classes}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {label}
    </motion.a>
  );
}
