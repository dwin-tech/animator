export const speaking = {
  hidden: {
    rotate: "-10deg",
  },
  show: {
    rotate: "0deg",
    transition: {
      delay: 0.5,
      repeat: 3,
      duration: 0.5,
      ease: "linear",
    },
  },
  exit: { rotate: 0, ease: "linear" },
};

export const handWave = {
  show: {
    rotate: ["-10deg", "0deg", "-10deg"],
    transition: {
      repeat: 2,
      duration: 0.7,
    },
  },
};

export const curlsMessages = {
  hidden: {
    top: "58%",
    left: "43%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "39%",
    top: "2%",
    left: "14%",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
      forwards: 1,
      ease: "linear",
    },
  },
};
