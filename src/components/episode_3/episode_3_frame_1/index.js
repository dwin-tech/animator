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

export const messageOneContainer = {
    hidden: {
        top: "53%",
        left: "54%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "15%",
        left: "7%",
        width: "40%",
        opacity: 1,
        transition:
        {
            duration: 0.2,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const messageTwoContainer = {
    hidden: {
        top: "58%",
        left: "82%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "20%",
        left: "55%",
        width: "36%",
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
