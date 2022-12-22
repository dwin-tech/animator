export const yellowDogContainer = {
  hidden: {
    x: 0,
    y: 0,
  },
  show: {
    y: -5,
    x: 80,
    transition: {
      duration: 0.9,
      delay: 0.4,
      forwards: 1,
      ease: "linear",
    },
  },
};

export const whiteDogContainer = {
  hidden: {
    x: 0,
    y: 0,
  },
  show: {
    y: 17,
    x: -71,
    transition: {
      duration: 0.9,
      delay: 0.4,
      forwards: 1,
      ease: "linear",
    },
  },
};

export const messageContent = {
  hidden: {
    bottom: "23%",
    left: "39%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "50%",
    left: "50%",
    bottom: "11%",
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 1,
      forwards: 1,
      ease: "linear",
    },
  },
};

export const secondMessageContent = {
  hidden: {
    bottom: "32%",
    left: "32%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "50%",
    bottom: "51%",
    left: "28%",
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.5,
      forwards: 1,
      ease: "linear",
    },
  },
};
