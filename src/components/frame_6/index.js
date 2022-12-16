export const handContainer = {
    hidden: {
        rotate: 0

    },
    show: {
        rotate: "-30deg",
        transition: {

            repeat: 3,
            duration: 0.7,
            ease: "linear",
        }
    },
    exit: { rotate: 0 ,ease: "linear",}
}

export const fiveContainer = {
    hidden: {
        scale: 1,
        bottom: "61%",
        right: "7%",
    

    },
    show: {
        // scale: 32,
        width:"35%",
        transition:
        {
            duration: 0.1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}
