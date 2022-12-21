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
        scale:1

    },
    show: {
        y: -70,
        x: -160,
        scale:4.5,
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
        bottom: "8%",
        right: "55%",
        width: "14%"

    },
    show: {
        bottom: "-38%",
        right: "10%",
        width: "80%",
   
        transition:
        {
            duration: 2.2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}

