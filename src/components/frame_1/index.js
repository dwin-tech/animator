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
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }

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
            delay: 0.2,
            forwards: 1,
            ease: "linear",
        }

    }
}
export const threeBox = {
    hidden: {
        y: 20,
    },
    show: {
        y: -23,
       
        transition: {
            duration: 1,
            delay: 0.3,
            forwards: 1,
            ease: "linear",
        }

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
                    delay: 0.1,
                    forwards: 1,
                    ease: "linear",
                }

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
                delay: 0.1,
                forwards: 1,
                ease: "linear",
            }

        }
    }
}



