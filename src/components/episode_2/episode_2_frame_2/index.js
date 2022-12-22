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

export const windowShineContainer = {
    hidden: {
        top: "0%",
        left: "-30%",
        width: "100%",
        
    },
    show: {
        top: "0%",
        left: "100%",
        transition:
        {
            duration: 0.9,
            delay: 0.2,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const handContainer = {


    show: {
        rotate: ["10deg", "0deg", "10deg"],
        transition: {


            repeat: 2, duration: 0.7
        }

    }
}

export const messageOneContainer = {
    hidden: {
        top: "41%",
        left: "23%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "0%",
        width: "100%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.6,
            forwards: 1,
            ease: "linear",
        }

    },
}
export const messageTwoContainer = {
    hidden: {
        top: "40%",
        left: "63%",
        width: "0%",
        opacity: 0.5,
    },
    show: {
        top: "0%",
        left: "0%",
        width: "100%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}