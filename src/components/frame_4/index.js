const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const container = {
    hidden: {
        left: "68%",
        top: "-15%",
        width: "39%"

    },
    show: {
        left: "13%",
        top: "14%",
        width: "33%",
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
        bottom: "10%",
        right: "-1%",
        width: "26%"

    },
    show: {
        bottom: "-31%",
        right: "18%",
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
        bottom: "51%",
        right: "59%",
        width: "0%",
        opacity:0.5,

    },
    show: {
        bottom: "61%",
        right: "0%",
        width: "40%",
        opacity:1,

        transition:
        {
            duration: 0.2,
            delay: 0.7,
            forwards: 1,
            ease: "linear",
        }

    },
}