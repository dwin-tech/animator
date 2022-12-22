export const handContainer = {
  
    show: {
        // rotate: "-30deg",
        rotate :["0deg","-30deg","0deg"],

        transition: {

            repeat: 3,
            duration: 0.7,
            ease: "linear",
        }
    }
}

export const blackContainerFrame6 = {
    hidden: {
        opacity: 0.2,

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
    }
}

export const fiveContainer = {
    hidden: {
        bottom: "32%",
        right: "55%",
        width: "0%",
opacity: 0.5,
    },
    show: {
        bottom: "61%",
        right: "7%",
        width: "35%",
        opacity: 1,

        transition:
        {
            duration: 0.2,
            delay: 0.7,
            forwards: 1,
            ease: "linear",
        }

    },
}
