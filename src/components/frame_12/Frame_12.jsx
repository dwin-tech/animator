

import { motion } from "framer-motion"
import boy from '../../assets/frame_12/boy.png'
import girl from '../../assets/frame_12/girl.png'
import shine from '../../assets/frame_12/shine.png'
import message from '../../assets/frame_12/message.png'


import './index.css';
import { evilGirlContainer, messageCont } from "."



export function Frame_12() {
    return (
        <div>
            <div className="framerTwelve">

                <img className="sadBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="evilGirl"

                    variants={evilGirlContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={girl} alt={"girl"} />

                <motion.img className="backCompShine"
                animate={{
                    opacity: [0.6, 0.9, 0.6],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                }}
                viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />

                <motion.img className="checkMessage"
                  variants={messageCont}
                  initial="hidden"
                  // animate="show"
                  whileInView="show"
                    src={message} alt={"message"} />

            </div>
        </div>
    )
}
