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
        top: "56%",
        left: "25%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "2%",
        width: "26%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.7,
            forwards: 1,
            ease: "linear",
        }

    },
}
export const eyesContainer = {
    hidden: {
      top: "44%",
      left: "21%",
      width: "27%",
    
    },
    show: {
      top: "44%",
      left: "23%",
      width: "27%",
    
      transition: {
        delay: 0.4,
        duration: 1,
        forwards: 1,
        ease: "linear",
      },
    },
  };
  export const mouthContainer = {
    hidden: {
      top: "67%",
      left: "24%",
      width: "30%",
    
    }, 
    show: {
      top: ["67%","68%","67%"],
    // top:"68%",
      left: "24%",
      width: "30%",
    
      transition: {
        delay: 0.4,
        duration: 1,
        forwards: 1,
        ease: "linear",
      },
    },
  };