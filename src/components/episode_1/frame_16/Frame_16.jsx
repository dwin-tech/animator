

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_16/boy.png'
import shine from '../../../assets/episode_1/frame_16/shine.png'
import message from '../../../assets/episode_1/frame_16/message.png'
import './index.css';
import { messageContent } from ".";
import { blackContainer } from "../blackWindow";

export function Frame_16({ visible }) {

    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <motion.div className="framerSixteen"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >
                <img className="slipBoyTwo"
                    src={boy} alt={"boy"} />
                <motion.img className="slipBoyTwoShine"
                    animate={visible ? {
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={shine} alt={"shine"} />
                <motion.img className="slipBoyTwoMessage"
                    variants={messageContent}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}
