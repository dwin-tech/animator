export const boyWithComputerContainer = {
    hidden: {
        top:  "0%",
        left: "0%",
        width: "100%",
        opacity:1,
    },
    show: {
        left: "66%",
        transition:
        {
            duration: 3,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}

export const blackContainer={
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