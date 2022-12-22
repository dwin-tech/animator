export const boyWithComputerContainer = {
    hidden: {
        top: "0%",
        left: "0%",
        width: "100%",
        opacity: 1,
    },
    show: {
        left: "66%",
        transition:
        {
            duration: 1.5,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }
    }
}

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

export const personEyesContainer = {
    hidden: {
        top: "0%",
        left: "0%",
        width: "100%",
    },
    show: {
        top: "0%",
        left: "2%",
        opacity: 0,

        transition:
        {
            duration: 0.7,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const messageOneContainer = {
    hidden: {
        top: "48%",
        left: "50%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "0%",
        width: "100%",
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
        top: "50%",
        left: "72%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "0%",
        width: "100%",
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


export const messageThreeContainer = {
    hidden: {
        top: "50%",
        left: "77%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "0%",
        width: "100%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.9,
            forwards: 1,
            ease: "linear",
        }

    },
}