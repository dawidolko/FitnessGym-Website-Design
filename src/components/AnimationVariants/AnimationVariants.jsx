const AnimationVariants = {
  modalAnimation: {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  },

  overlayAnimation: {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  },

  fadeIn: {
    initial: {
      y: "-100px",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },

  fadeIn2: {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeIn",
      },
    },
  },

  slideIn: {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  },
};

export default AnimationVariants;
