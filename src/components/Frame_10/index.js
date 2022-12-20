export const messageCont = {
    hidden: {
        bottom: "28%",
        left: "64%",
        width: "1%",
    },
    show: {
        width: ["1%", "10%","63%","44%"],
        // bottom: "76%",
        bottom: ["28%","76%","76%","76%"],
        left: "58%",
        transition:
        {
            duration: 0.4,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const personTwoContainer = {
    hidden: {
        x: 0,
    },
    show: {
        x: 39,
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}