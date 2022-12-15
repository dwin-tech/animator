export const girlContainer={
    hidden: {
        x: 0,
        transition:
        {
            duration:2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    },
    show: {
       x:-100,
        transition:
        {
            duration:2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}

export const boyContainer={
    hidden: {
        x: 0,
        transition:
        {
            duration:2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    },
    show: {
       x:100,
        transition:
        {
            duration:2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}

export const messageCont = {
    hidden: {
        scale: 1,
    },
    show: {
        width: "50%",
        transition:
        {
            duration:2,
            delay: 2,
            forwards: 1,
            ease: "linear",
        }

    },
}