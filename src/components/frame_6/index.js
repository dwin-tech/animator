export const handContainer = {
    hidden: {
        rotate: 0

    },
    show: {
        rotate: "-30deg",
        transition: {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
        }
    },
    exit: { rotate: 0 ,ease: "linear",}
}

export const fiveContainer = {
    hidden: {
        scale: 1,


    },
    show: {
        scale: 32,
        
        transition:
        {
            duration: 0.1,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }

    },
}
