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
        bottom: "22%",
        left: "33%",
        width: "0%",
        opacity:0.5
    },
    show: {
        width: "44%",
        // width: ["1%", "10%","53%","44%"],
        // bottom: ["28%","76%","76%","76%"],
        bottom: "76%",
        left:"58%",
        opacity:1,
        // left: ["38%","48%","58%","58%"],
        transition:
        {
            duration: 0.2,
            delay: 0.8,
            forwards: 1,
            ease: "linear",
        }

    },
}