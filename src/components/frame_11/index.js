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
            duration:0.5,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    },
    show: {
       x:100,
        transition:
        {
            duration:1.2,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}

export const messageCont = {
    hidden: {
        bottom: "71%",
        left: "100%",
        width: "1%",
    },
    show: {
        width: "44%",
        bottom: "76%",
        left: "58%",
        transition:
        {
            duration: 0.5,
            delay: 0.8,
            forwards: 1,
            ease: "linear",
        }

    },
}