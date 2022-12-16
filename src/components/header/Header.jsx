import { motion } from "framer-motion"


import './header.css';

const sentence = {
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
const line = "Episode 1. Our Days.."

const letter = {
    hidden: { opacity: 0,  },
    visible: {
        opacity: 1,
        Y: 0
    }
}
export function Header() {



    return (
        <section className='header' style={{ marginTop: "5%", scrollSnapAlign: "center" }}>
            <div className="headerDiv">
                <motion.h1 className="titleOne" style={{ color: "white" }}
                    variants={sentence}
                    initial="hidden"
                    whileInView="visible"
                >
                    {line.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
                        )
                    })}
                </motion.h1>





            </div>


        </section>
    )
}
