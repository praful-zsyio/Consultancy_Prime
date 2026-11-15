// ─── Framer Motion Animation Variants & Utilities ────────────────────────────

export const viewport = { once: true, margin: '-80px' };

export const transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export const transitionFast = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0  },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -56 },
  visible: { opacity: 1, x: 0   },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 56 },
  visible: { opacity: 1, x: 0  },
};

export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1    },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.05,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren:   0.0,
    },
  },
};

