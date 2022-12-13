

import { motion } from "framer-motion"
import { messageCont } from ".";
import boy from '../../assets/frame_13/boy.png'
import shine from '../../assets/frame_13/shine.png'
import timeMessage from '../../assets/frame_13/timeMessage.png'


import './index.css';



export function Frame_13() {
    return (
        <div>
            <div className="thirteen">

                <img className="upsetGuy"
                    src={boy} alt={"boy"} />
                <motion.img className="upsetGuyShine"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}

                    src={shine} alt={"shine"} />
                <motion.img className="timeMessage"

                    variants={messageCont}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={timeMessage} alt={"timeMessage"} />
            </div>
        </div>
    )
}
