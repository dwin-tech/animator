const transition = {
    duration: 2,
    delay: 0.1,
    forwards: 1,
    ease: "linear",
}





export const boxOne = {
    hidden: {
        
        y: 10,
        
    },
    show: {
        y: -3,
        transition: {
            duration: 1,
            delay: 1.1,
            forwards: 1,
            ease: "linear",
        }

    },
    exit:{
        y: -3,
    }
}

export const twoBox = {
    hidden: {
        y: 20,
        
    },
    show: {
        y: -80,
        transition: {
            duration: 0.8,
            delay: 1.2,
            forwards: 1,
            ease: "linear",
        }

    },
    exit:{
        y: -33,
    }
}
export const threeBox = {
    hidden: {
        y: 20,
     

    },
    show: {
        y: -47,
       
        transition: {
            duration: 1,
            delay: 1.3,
            forwards: 1,
            ease: "linear",
        }
    },
    exit:{
        y: -23,
    }
}

export const birdsContainer ={
    hidden: {
        x: 0,
        y: 0,
    },
    show: {
        y:-700,
        x:-700,
        transition: {
            duration: 2,
            delay: 1.1,
            forwards: 1,
            ease: "linear",
        }
    },
}
 



export const sentence = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,

        transition:
        {

            delay: 0.5,
            staggerChildren: 0.08,
        }

    }
}

export const letter = {
    hidden: { opacity: 0, },
    visible: {
        opacity: 1,
        Y: 0
    }
}


export const scrollIConContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition:
        {
            delay: 1.8, duration: 1, ease: "linear",
        }
    }
}