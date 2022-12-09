import girls from '../../assets/frame_5/girls.png'
import hand from '../../assets/frame_5/hand.png'
import eyes from '../../assets/frame_5/eyes.png'

import { motion } from "framer-motion"



import './index.css';
import { handContainer } from '.';


export function Frame_5() {
    return (
        <div>
            <div className="framerFive">
                <img className="girls"
                    src={girls} alt={"girls"} />
                <motion.img
                    variants={handContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    className="hand" src={hand} alt={"hand"} />

                <motion.img className="eyes"
                    animate={{
                        opacity: [0.7, 0.9, 0.7],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}
                    src={eyes} alt={"eyes"} />

            </div>
        </div>
    )
}
