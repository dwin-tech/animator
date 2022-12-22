export const blackContainer = {
    hidden: {
        opacity: 0,
        transition:
        {
            duration: 1,
            delay: 0,
            forwards: 1,
            ease: "linear",
        },

    },
    show: {
        opacity: 1,
        // y: -4,
        transition:
        {
            duration: 3,
            delay: 0,
            forwards: 1,
            ease: "linear",
        }
    },
}

export const boardContainer = {
    hidden: {
        top: "100%",
        left: "-50%",
        width: "62%",

    },
    show: {
        top: "10%",
        left: "35%",
        width: "62%",

        transition:
        {
            duration: 0.5,
            delay: 0.6,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const handContainer = {


    show: {
        rotate: ["40deg", "20deg", "40deg"],
        transition: {

            delay: 0.5,
            repeat: 1, duration: 2
        }

    }
}


export const messageContainer = {
    hidden: {
        top: "48%",
        left: "29%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "60%",
        left: "42%",
        width: "40%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.8,
            forwards: 1,
            ease: "linear",
        }

    },
}
