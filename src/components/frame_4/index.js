const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const container = {
    hidden: {
        left: "68%",
        top: "-15%",
        width:"39%"

    },
    show: {
        left: "30%",
        top: "5%",
        width:"35%",
        
        transition :
            {
                duration: 1,
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
                duration: 1.5,
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
            duration:0.5,
            delay: 0.7,
            forwards: 1,
            ease: "linear",
        }

    },
}