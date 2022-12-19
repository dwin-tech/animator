
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
 
             bottom: "49%",
             right: "63%",
             width: "1%",
            
        },
        show: {     
            // opacity:[0.4,0.9,1,1],

            width: ["1%", "10%","63%","55%"],
            bottom: ["49%","63%","53%","56%"],
            right: ["63%","0%","0%","0%"],
            transition:
            {
                duration: 0.4,
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