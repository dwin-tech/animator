const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const carGreenContainer = {
    hidden: {
        y: 0,
        x: 0,

    },
    show: {
        y: 30,
        x: 5,
        scale: 1.1,
        transition

    }
}


export const carYellowContainer = {
    hidden: {
        y: 0,
        x: 0,

    },
    show: {
        y: 30,
        x: 3,
        scale: 1.1,
        transition
    }
}

export const carBlueContainer = {
    hidden: {
        y: 0,
        x: 0,

    },
    show: {
        scale: 1.1,

        y: 30,
        x: 35,

        transition
    }
}

