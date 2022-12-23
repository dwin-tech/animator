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

export const windowShineContainer = {
    hidden: {
        top: "0%",
        left: "-64%",
        width: "85%",

    },
    show: {
        top: "0%",
        left: "100%",
        width: "85%",

        transition:
        {
            duration: 0.9,
            delay: 0.2,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const messageContainer = {
    hidden: {
        top: "66%",
        left: "21%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "6%",
        left: "9%",
        width: "40%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.8,
            forwards: 1,
            ease: "linear",
        }

    },
}