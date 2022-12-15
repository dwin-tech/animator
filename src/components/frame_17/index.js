export const starShow = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition:
        {
            duration: 2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const onLight = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 0,
        transition:
        {
            duration: 1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const nightContainer = {
    hidden: {
        x: 0,
        y: 0,
    },
    show: {
        y: -40,
        x: -156,
        transition:
        {
            duration: 2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const carContainer = {
    hidden: {
        x: 0,
        y: 0,
        scale: 1
    },
    show: {
        y: 40,
        x: 72,
        scale: 4.1,
        transition:
        {
            duration: 1.5,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}

