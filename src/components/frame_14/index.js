export const messageContent = {
    hidden: {
        bottom:"49%",
        left: "60%",
        width: "0%",
        opacity:0.5,
        
    },
    show: {
        width:"30%",
        bottom:"79%",
        left:"64%",
        opacity:1,
        transition:
        {
            duration:0.2,
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