

export const blackContainer = {
    hidden: {
        opacity: 0,
        transition:
        {
            duration: 1,
            delay: 0,
            forwards: 1,
            ease: "linear",
        },

    },
    show: {
        opacity: 1,
        // y: -4,
        transition:
        {
            duration: 3,
            delay: 0,
            forwards: 1,
            ease: "linear",
        }
    },
}

export const messageContainer = {
    hidden: {
        top: "65%",
        left: "100%",
        width: "0%",
        opacity: 0.5,
      },
      show: {
        width: "50%",
        top: "65%",
        left: "50%",
        opacity: 1,
        transition: {
          delay: 0.7,
          duration: 0.2,
          forwards: 1,
          ease: "linear",
        },
      },
}