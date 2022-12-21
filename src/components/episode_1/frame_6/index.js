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
    exit: { rotate: 0, ease: "linear", }
}

// export const fiveContainer = {
//     hidden: {
//         scale: 1,
//         bottom: "61%",
//         right: "7%",


//     },
//     show: {
//         // scale: 32,
//         width:"35%",
//         transition:
//         {
//             duration: 0.1,
//             delay: 1,
//             forwards: 1,
//             ease: "linear",
//         }

//     },
// }
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
        // width: ["1%", "10%", "53%", "35%"],
        // bottom: ["32%", "51%", "55%", "61%"],
        // right: ["68%", "17%", "7%", "7%"],
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
