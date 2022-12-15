
export const container = {
    hidden: {
        x: 0,
        transition:
        {
            duration: 0.5,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }

    },
    show: {
        x: -45,
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}
export const messageContainer = {
    hidden: {
        scale: 1,
        x: 0,
        transition:
        {
            duration: 0.5,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    },
    show: {
        scale: 5,
        x: -16,
        transition:
        {
            duration:2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }

    },
}