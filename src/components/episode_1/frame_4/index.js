const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const container = {
    hidden: {
        left: "64%",
        top: "-15%",
        width: "67%"
    },
    show: {
        left: "10%",
        top: "22%",
        width: "45%",
        transition:
        {
            duration: 0.8,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}
export const listsContainer = {
    hidden: {
        bottom: "20%",
        right: "-2%",
        width: "26%"

    },
    show: {
        bottom: "-20%",
        right: "48%",
        width: "26%",
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}


export const messContainer = {
    hidden: {
        bottom: "62%",
        right: "62%",
        width: "0%",
        opacity:0.5,

    },
    show: {
        bottom: "75%",
        right: "13%",
        width: "46%",
        opacity:1,

        transition:
        {
            duration: 0.2,
            delay: 0.6,
            forwards: 1,
            ease: "linear",
        }

    },
}