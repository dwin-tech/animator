export const yellowDogContainer = {
    hidden: {
        x: 0,
        y: 0,
    },
    show: {
        y: -5,
        x: 80,
        transition:
        {
            duration: 0.9,
            delay: 0.4,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const whiteDogContainer = {
    hidden: {
        x: 0,
        y: 0,
    },
    show: {
        y: 17,
        x: -71,
        transition:
        {
            duration: 0.9,
            delay: 0.4,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const messageContent = {
    hidden: {
        bottom: "23%",
        left: "39%",

        width: "1%",
    },
    show: {
        width: "50%",
        width: ["1%", "10%","63%","50%"],
        // bottom: "76%",
        bottom: ["23%","11%","11%","11%"],
        left:  ["39%","45%","45%","45%"],
        transition:
        {
            duration: 0.5,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const secondMessageContent = {
    hidden: {
        bottom: "32%",
        left: "32%",

        width: "1%",
    },
    show: {
        width: "50%",
        width: ["1%", "10%","63%","50%"],
        // bottom: "76%",
        bottom: ["32%","51%","51%","51%"],
        left:  ["32%","28%","28%","28%"],
        transition:
        {
            duration: 0.5,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}