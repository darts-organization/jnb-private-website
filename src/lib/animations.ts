import type { Variants, Transition } from "framer-motion";

// ─── Luxury easing ───────────────────────────────────────────────
// Refined cubic-bezier curves — smooth deceleration, no bounce
export const ease = {
  luxury: [0.22, 1, 0.36, 1] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
  out: [0, 0, 0.2, 1] as const,
};

// ─── Shared transition presets ───────────────────────────────────
export const transition = {
  default: { duration: 0.8, ease: ease.luxury } satisfies Transition,
  slow: { duration: 1.2, ease: ease.luxury } satisfies Transition,
  fast: { duration: 0.5, ease: ease.luxury } satisfies Transition,
};

// ─── Fade Up (primary reveal) ────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.default,
  },
};

// ─── Fade In (no translate) ──────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.default,
  },
};

// ─── Scale In (overlay squares) ──────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ease.luxury },
  },
};

// ─── Stagger container ───────────────────────────────────────────
export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// ─── Stagger item (used inside staggerContainer) ─────────────────
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.luxury },
  },
};

// ─── Hero-specific variants ──────────────────────────────────────
export const heroWord: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.luxury },
  },
};

export const heroDivider: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: ease.luxury },
  },
};

// ─── Viewport detection settings ─────────────────────────────────
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};
