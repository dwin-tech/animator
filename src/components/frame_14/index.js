export const messageContent = {
    hidden: {
        bottom:" 90%",
        left: "62%",
        width: "1%"
    },
    show: {
        width:"30%",
        transition:
        {
            duration:0.5,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}

export const browsContainer={
    hidden: {
        y: 0,
    },
    show: {
       y:3,
        transition:
        {
            duration:2,
            delay: 1,
            forwards: 1,
            ease: "linear",
        }
    }
}