import greySquare from "../assets/constructor/greySquare.png";

export const emptyJson = {
  title: "New Episode",
  frames: [
    {
      title: "",
      imgs: [],
      main: {
        className: "frame",
        initial: "hidden",
        style: {
          margin: "auto",
          maxWidth: "800px",
          overflow: "hidden",
          position: "relative",
        },
        variants: {
          hidden: {
            opacity: "0.2",
            transition: {
              delay: 0,
              duration: 1,
              ease: "linear",
              forwards: 1,
            },
          },
          show: {
            opacity: 1,
            transition: {
              delay: 0,
              duration: 3,
              ease: "linear",
              forwards: 1,
            },
          },
        },
      },
    },
  ],
};

export const newFrame = {
  title: "",
  timestamp: new Date().getTime(),
  imgs: [],
  main: {
    className: "frame",
    initial: "hidden",
    style: {
      margin: "auto",
      maxWidth: "800px",
      overflow: "hidden",
      position: "relative",
    },
    variants: {
      hidden: {
        opacity: "0.2",
        transition: {
          delay: 0,
          duration: 1,
          ease: "linear",
          forwards: 1,
        },
      },
      show: {
        opacity: 1,
        transition: {
          delay: 0,
          duration: 3,
          ease: "linear",
          forwards: 1,
        },
      },
    },
  },
};
