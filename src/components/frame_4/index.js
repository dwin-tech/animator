const transition = {
    duration: 1,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}




export const container = {
    hidden: {
        left: "68%",
        top: "-15%",
        width: "39%"

    },
    show: {
        left: "30%",
        top: "5%",
        width: "35%",

        transition:
        {
            duration: 0.8,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}
export const listsContainer = {
    hidden: {
        bottom: "10%",
        right: "-1%",
        width: "26%"

    },
    show: {
        bottom: "-31%",
        right: "18%",
        width: "26%",
        transition:
        {
            duration: 1,
            delay: 0.1,
            forwards: 1,
            ease: "linear",
        }
    }
}



// export const messContainer = {
//     hidden: {
//         bottom: "77%",
//         right: 0,
//         width: "13%"
//     },
//     show: {
//         width: "40%",
//         bottom: "61%",
//         right: 0,
//         transition:
//         {
//             duration: 0.5,
//             delay: 0.2,
//             forwards: 1,
//             ease: "linear",
//         }

//     },
// }

export const messContainer = {
    hidden: {
        bottom: "81%",
        right: "43%",
        width: "1%"

    },
    show: {
        width: ["10%", "53%","33%","40%"],
        // bottom: "61%",
        bottom:["71%","61%","61%","61%"],
        right: ["23%","0%","0%","0%"],

        transition:
        {
            duration: 0.4,
            delay: 0.5,
            forwards: 1,
            ease: "linear",
        }

    },
}