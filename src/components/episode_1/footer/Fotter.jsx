import { motion } from "framer-motion"
import './index.css';



const sentence = {
    hidden: {
        opacity: 1,

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
const line = "To Be Continued"

const letter = {
    hidden: { opacity: 0, },
    visible: {
        opacity: 1,
        transition:
        {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}
export function Footer() {
    
    return (
        <section className='footer' style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="footerDiv">
                <motion.h1 className="titleTwo" style={{ color: "white" }}
                    // variants={sentence}
                    // initial="hidden"
                    // whileInView="visible"
                >
                    {line.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} animate={{
                                opacity: [0.5, 1, 0.5],
                                transition:
                                {
                                    repeat: "Infinity", duration: 0.8, ease: "linear",
                                }
                            }}>{char}</motion.span>
                        )
                    })}
                </motion.h1>
            </div>
        </section>
    )
}
