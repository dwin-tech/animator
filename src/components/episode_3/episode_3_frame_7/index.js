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
export const girlContainer={
    hidden: {
        top: "0%",
        left: "100%",
        width: "34%",
    }, 
        /* top: 0%;
    right: 0%;
    width: 34%; */
    show: {
        top: "0%",
        left: "67%",
        width: "34%",
        transition:
        {
            duration: 1.5,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }
    }
}