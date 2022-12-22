export const handWave = {
  hidden: {
    opacity: 1,
    rotate: "-57deg",
    top: "90%",
    left: "51%",
    width: "38%",
  },
  show: {
    top: "24%",
    left: "62%",
    width: "38%",
    rotate: "0deg",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      forwards: 1,

      ease: "linear",
    },
  },
};

export const handMessages = {
  hidden: {
    top: "15%",
    left: "100%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "50%",
    top: "2%",
    left: "40%",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.2,
      forwards: 1,
      ease: "linear",
    },
  },
};
