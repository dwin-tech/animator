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
        top: "69%",
        left: "51%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "51%",
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
