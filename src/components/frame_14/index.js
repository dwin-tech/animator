export const messageContent = {
    hidden: {
        bottom:"49%",
        left: "47%",
        width: "1%"
    },
    show: {
        // width:"30%",
        width: ["1%", "10%","43%","30%"],
        bottom: ["49%","70%","79%","79%"],
        left: ["47%","60%","64%","64%"],
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