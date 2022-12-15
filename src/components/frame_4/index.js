const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const container = {
    hidden: {
        x: 0,

    },
    show: {
        x: -138,
        y:30,
        scale:0.9,
        
        transition :
            {
                duration: 2,
                delay: 0.1,
                forwards: 1,
                ease: "linear",
            }
        }
}
export const listsContainer = {
    hidden: {
        x: 0,

    },
    show: {
        x: -100,
        y:50,
        
        transition :
            {
                duration: 2,
                delay: 0.1,
                forwards: 1,
                ease: "linear",
            }
        }
}



export const messContainer = {
    hidden: {
        scale: 1,
        x: 0
    },
    show: {
        width:"40%",
        x: 5,
        y:13,
        transition:
        {
            duration:1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}