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

        top: "24%",
        left: "58%",
        width: "1%",
    },
    show: {
        top: ["16%","16%","16%","16%"],
        // left: "40%",
        left: ["58%","50%","40%","40%"],

        width: ["1%","10%", "45%","35%"],
        // scale:[53,43,12,8],
        transition:
        {
            duration: 0.5,
            delay: 0.1,
            forwards: 1,
            ease:[0.1,0,0,0]
        }
    },
    
}