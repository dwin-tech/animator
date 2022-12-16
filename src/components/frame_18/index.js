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
        bottom: "10%",
        left: "50%",
        width: "1%",
        
    },
    show: {
        width: "50%",
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
        bottom: "50%",
        left: "30%",

        width: "1%",
    },
    show: {
        width: "50%",
        transition:
        {
            duration: 0.5,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}