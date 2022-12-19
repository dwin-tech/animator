export const evilGirlContainer = {
    hidden: {
        bottom: 0,
        left: "46%",
        width: "40%",
    },
    show: {
        left: "66%",
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}


export const messageCont = {
    hidden: {
        // scale: 1,

        top: "16%",
        left: "49%",
        width: "1%",
    },
    show: {
        top: "16%",
        left: ["35%","35%","40%"],
        // left: "40%",

        width: ["1%", "40%","35%"],
        // scale:[53,43,12,8],
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease:[0.1,0,0,0]
        }
    },
    
}