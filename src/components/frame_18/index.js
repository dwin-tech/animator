export const  yellowDogContainer={
    hidden: {
        x: 0,
        y:0,
    },
    show: {
        y:-5,
        x: 80,
        transition:
        {
            duration:1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const  whiteDogContainer={
    hidden: {
        x: 0,
        y:0,
    },
    show: {
        y:17,
        x: -71,
        transition:
        {
            duration:1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}


export const messageContent = {
    hidden: {
        scale: 1,
    },
    show: {
        scale: 25,
        transition:
        {
            duration:1.5,
            delay: 1.5,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const secondMessageContent = {
    hidden: {
        scale: 1,
    },
    show: {
        scale: 17,
        transition:
        {
            duration:1.5,
            delay: 1.5,
            forwards: 1,
            ease: "linear",
        }

    },
}