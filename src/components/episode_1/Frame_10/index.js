export const messageCont = {
    hidden: {
        bottom: "25%",
        left: "70%",
        width: "0%",
        opacity:0.5
    },
    show: {
        width:"44%",
        top: "0%",
        left: "58%",
        opacity:1,

        transition:
        {
            duration: 0.2,
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