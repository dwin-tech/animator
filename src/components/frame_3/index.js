
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
            width: "1%",
            bottom: "55%",
            right: "23%",
            opacity:0,
            
        },
        show: {
            bottom: "56%",
            right: ["0%","0%","0%","0%"],
            bottom: "56%",
            width: ["10%", "63%","53%","55%"],
            opacity:[0.4,0.9,1,1],
            transition:
            {
                duration: 0.8,
                delay: 0.6,
                forwards: 1,
                // ease:[0.86,0.3,0.4,0.530]
                ease:"linear"
            }
        },
    }
// export const messageContainer = {
//     hidden: {
//         width: "1%",
//         bottom: "55%",
//         right: "23%"
        
//     },
//     show: {
//         width: "55%",
//         bottom: "56%",
//         right: "0%",
//         transition:
//         {
//             duration:1,
//             delay: 0.1,
//             forwards: 1,
//             ease: "linear",
//         }

//     },
// }