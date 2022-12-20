export const fingerContainer = {
    hidden: {
        rotate: 0

    },
    show: {
        rotate: "-30deg",
        transition: {
            repeat: 3,
            duration: 0.7,
            // ease: "linear",
        }
    },
    exit: { rotate: 0, ease: "linear", }
}


export const eyesContainer = {
    hidden: {
        x: 0,

    },
    show: {
        x: 3,
        // y: -4,
        transition: {
            repeat: 3,
            duration: 2,
            // ease: "linear",
        }
    }
}

export const messageContainer={
    hidden: {
        // scale: 1,
        // x: 0
        top: "80%",
        right:"23%",
        width: "0%",
        // opacity:0.5,

    },
    show: {
        width: "55%",
        // width: ["1%", "10%", "63%", "55%"],
        top:"90%",
        right: "23%",
        // opacity:1,
        transition:
        {
            duration: 0.2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}