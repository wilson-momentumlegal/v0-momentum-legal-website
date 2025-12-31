// lib/mobile-animations.ts - Mobile-optimized animation system
import { Variants } from "framer-motion"

// Mobile-specific easing curves (typed as tuples for Framer Motion compatibility)
const MOBILE_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94] // Optimized for touch
const MOBILE_BOUNCE: [number, number, number, number] = [0.68, -0.55, 0.265, 1.55]
const MOBILE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1]

// Mobile-optimized reveal animations (less aggressive transforms)
export const mobileRevealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30, // Smaller movement for mobile
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: MOBILE_EASE
    }
  }
}

export const mobileSlideIn: Variants = {
  hidden: {
    opacity: 0,
    x: -20, // Smaller slide distance
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: MOBILE_SMOOTH
    }
  }
}

// Touch-optimized interactions
export const mobileTouchScale: Variants = {
  rest: {
    scale: 1,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.96, // Subtle feedback
    transition: { duration: 0.1 }
  }
}

export const mobileButtonPress: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
  },
  tap: {
    scale: 0.98,
    y: 1,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.1 }
  }
}

// Mobile card interactions
export const mobileCardHover: Variants = {
  rest: {
    scale: 1,
    y: 0
  },
  tap: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: MOBILE_BOUNCE
    }
  }
}

// Mobile stagger animations (faster for mobile)
export const mobileStagger: Variants = {
  show: {
    transition: {
      staggerChildren: 0.05, // Faster stagger
      delayChildren: 0.1
    }
  }
}

// Mobile loading animations
export const mobileLoadingPulse: Variants = {
  hidden: {
    scale: 0.9,
    opacity: 0.8
  },
  show: {
    scale: [0.9, 1.05, 0.9],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Mobile navigation animations
export const mobileNavSlide: Variants = {
  hidden: {
    x: "100%",
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: MOBILE_SMOOTH
    }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: MOBILE_SMOOTH
    }
  }
}

// Mobile text reveal (optimized for readability)
export const mobileTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: MOBILE_EASE
    }
  }
}

// Mobile scroll progress
export const mobileScrollIndicator: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0.8
  },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Mobile floating elements (subtle for mobile)
export const mobileFloat: Variants = {
  rest: {
    y: 0,
    rotate: 0
  },
  tap: {
    y: -4, // Smaller float distance
    rotate: 1,
    transition: {
      duration: 0.3,
      ease: MOBILE_BOUNCE
    }
  }
}

// Mobile entrance animations
export const mobileEntranceSlide: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    skewX: 2
  },
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.4,
      ease: MOBILE_EASE
    }
  }
}

// Mobile icon animations
export const mobileIconSpin: Variants = {
  rest: {
    rotate: 0,
    scale: 1
  },
  tap: {
    rotate: 15,
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: MOBILE_BOUNCE
    }
  }
}

// Mobile badge animations
export const mobileBadgePulse: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: MOBILE_BOUNCE
    }
  }
}

// Mobile section reveals
export const mobileSectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: MOBILE_EASE
    }
  }
}