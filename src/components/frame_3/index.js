
export const container = {
    hidden: {
        x: 0,
        transition:
        {
            duration: 0.5,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }

    },
    show: {
        x: -45,
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}





    export const messageContainer = {
        hidden: {
 
             bottom: "44%",
             right: "61%",
             width: "0%",
             opacity:0.5,

        },
        show: {     
            width: "55%",
            bottom: "56%",
            right:"0%",
            opacity:1,

            
            transition:
            {
                duration: 0.2,
                delay: 0.5,
                forwards: 1,
                // ease:[0.86,0.3,0.4,0.530]
                ease:"linear"
            }
        },
    }