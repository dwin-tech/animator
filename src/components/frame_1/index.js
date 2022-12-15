const transition = {
    duration: 2,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}





export const boxOne = {
    hidden: {
        y: 0,
        
    },
    show: {
        y: -3,
        transition: {
            duration: 1,
            delay: 1.1,
            forwards: 1,
            ease: "linear",
        }

    },
    exit:{
        y: -3,
    }
}

export const twoBox = {
    hidden: {
        y: 20,
        
    },
    show: {
        y: -33,
        transition: {
            duration: 0.8,
            delay: 1.2,
            forwards: 1,
            ease: "linear",
        }

    },
    exit:{
        y: -33,
    }
}
export const threeBox = {
    hidden: {
        y: 20,
        transition: {
            duration: 1,
            delay: 1.3,
            forwards: 1,
            ease: "linear",
        }

    },
    show: {
        y: -23,
       
        transition: {
            duration: 1,
            delay: 1.3,
            forwards: 1,
            ease: "linear",
        }
    },
    exit:{
        y: -23,
    }
}


export const centerScreenAnimationVariant = {
    initial:{
          x:"50%",
          y:"50%"
          
      },
    animate:{
      x:"0%",
      y:"0%",
      translateX: "-50%",
      translateY: "-50%",
    }  
  }

export const birdsContainerSmall = (width) => {
    if (width < 600) {
        return {
            hidden: {
                x: 0,
                y: 0,
            },
            show: {
                y: -(width / 2),
                x: -(width / 2),
                transition: {
                    duration: 3,
                    delay: 1.1,
                    forwards: 1,
                    ease: "linear",
                }
            },
            exit:{
                y: -(width / 2),
                x: -(width / 2),
            }
        }
    }

    return {
        hidden: {
            x: 0,
            y: 0,
        },
        show: {
            y: -(width / 100 * 10),
            x: -(width / 100 * 10),
            transition: {
                duration: 3,
                delay: 1.1,
                forwards: 1,
                ease: "linear",
            }

        },
        exit:{
            y: -(width / 100 * 10),
            x: -(width / 100 * 10),
        }
    }
}



