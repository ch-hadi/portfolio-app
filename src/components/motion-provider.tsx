"use client";

import { domAnimation, LazyMotion } from "framer-motion";

/**
 * Loads only the DOM animation feature bundle of Framer Motion (animations,
 * variants, exit + hover/tap gestures) and pairs it with the lightweight `m`
 * component instead of the full `motion` component. This strips the eagerly
 * bundled feature set, cutting unused JavaScript on first load.
 *
 * Requirement: components must import `m` (not `motion`) from framer-motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
