

import { motion } from "framer-motion"
import boy from '../../assets/frame_16/boy.png'
import shine from '../../assets/frame_16/shine.png'
import message from '../../assets/frame_16/message.png'



import './index.css';
import { messageContent } from ".";




export function Frame_16() {
    return (
        <div>
            <div className="framerSixteen">

                <img className="slipBoyTwo"
                    src={boy} alt={"boy"} />
                <motion.img className="slipBoyTwoShine"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />

                <motion.img className="slipBoyTwoMessage"

                    variants={messageContent}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={message} alt={"message"} />



            </div>
        </div>
    )
}
