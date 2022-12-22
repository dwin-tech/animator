const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}

export const handContainer = {
  
    show: {
        rotate :["0deg","-10deg","0deg"],
        transition: {


            repeat: Infinity, duration: 1
        }
        
    },
}



export const blackContainerFrame5 = {
    hidden: {
        opacity: 0.2,

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
