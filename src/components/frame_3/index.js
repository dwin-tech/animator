
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
            right: "23%"
            
        },
        show: {
            // width: "55%",
            bottom: "56%",
            // right: "0%",
            right: ["0%","0%","0%","0%"],

            bottom: "56%",

            width: ["1%", "70%","55%"],
            // scale:[53,43,12,8],
            transition:
            {
                duration: 1.5,
                delay: 0.5,
                forwards: 1,
                // ease:[0.86,0.3,0.4,0.530]
                ease:"backOut"
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