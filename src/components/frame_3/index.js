
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
        width: "1%",
        bottom: "55%",
        right: "23%"
        
    },
    show: {
        width: "55%",
        bottom: "56%",
        right: "0%",
        transition:
        {
            duration:1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }

    },
}