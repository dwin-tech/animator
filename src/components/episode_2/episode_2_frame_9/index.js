export const leftDogJaw = {
  rotate: "-20deg",
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: "0.3deg",
    transition: {
      delay: 0.5,
      repeat: 3,
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: { rotate: 0, ease: "linear" },
};

export const rightDogJaw = {
  hidden: {
    rotate: 0,
  },
  show: {
    rotate: "-0.5deg",
    transition: {
      delay: 0.5,
      repeat: 3,
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: { rotate: 0, ease: "linear" },
};

export const dogsMessages1 = {
  hidden: {
    top: "48%",
    left: "41%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "100%",
    top: "0%",
    left: "0%",
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      forwards: 1,
      ease: "linear",
    },
  },
};

export const dogsMessages2 = {
  hidden: {
    bottom: "50%",
    left: "53%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "100%",
    bottom: "0%",
    left: "0%",
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.7,
      forwards: 1,
      ease: "linear",
    },
  },
};
