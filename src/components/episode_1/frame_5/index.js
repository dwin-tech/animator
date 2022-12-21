const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}

export const handContainer = {
    hidden: {
       rotate:0,
       

    },
    show: {
        rotate :"-10deg",
        transition: {


            repeat: Infinity, duration: 0.7
        }
        
    },
    exit: { rotate: 0 }
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
