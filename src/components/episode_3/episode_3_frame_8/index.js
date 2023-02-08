export const message = {
  hidden: {
    top: "41%",
    left: "48%",
    width: "0%",
    opacity: 0.5,
  },
  show: {
    width: "23%",
    top: "9%",
    left: "61%",
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.2,
      forwards: 1,
      ease: "linear",
    },
  },
};


export const fingerContainer = {

  show: {
      rotate: ["0deg", "15deg", "0deg"],

      transition: {
          repeat: 3,
          duration: 0.7,
          // ease: "linear",
      }
  }
}

export const curlHandContainer = {

  show: {
      // rotate: ["0deg", "15deg", "0deg"],
      rotate:"-15deg",

      transition: {
          repeat: 0,
          duration: 0.7,
          // ease: "linear",
      }
  }
}
export const eyesOneContainer = {
  hidden: {
    top: "32%",
    left: "13.5%",
    width: "10%",
  
  },
  show: {
    top: "32%",
    left: "14%",
    width: "10%",
  
    transition: {
      delay: 0.4,
      duration: 1,
      forwards: 1,
      ease: "linear",
    },
  },
};
export const eyesTwoContainer = {
  hidden: {
    top: "60%",
    left: "77%",
    width: "13%",
  
  }, 
  show: {
    top: "60%",
    left: "76%",
    width: "13%",
  
    transition: {
      delay: 0.4,
      duration: 1,
      forwards: 1,
      ease: "linear",
    },
  },
};
