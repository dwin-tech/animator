

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_14/boy.png'
import shine from '../../../assets/episode_1/frame_14/shine.png'
import message from '../../../assets/episode_1/frame_14/message.png'
import brows from '../../../assets/episode_1/frame_14/brows.png'
import './index.css';
import { browsContainer, messageContent } from "."
import { blackContainer } from "../blackWindow"

export function Frame_14({ visible }) {
    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <div className="fourteen">
                <motion.div className="xxxx"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>

                    <img className="phoneBoy"
                        src={boy} alt={"boy"} />
                    <motion.img className="phoneBoyShine"
                        animate={visible ? {
                            opacity: [0.5, 1, 0.5],
                            transition:
                            {
                                delay: 1, repeat: "Infinity", duration: 1, ease: "linear",
                            }
                        } : { opacity: 1 }}

                        src={shine} alt={"shine"} />
                    <motion.img className="phoneBoyMessage"

                        variants={messageContent}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={message} alt={"message"} />
                    <motion.img className="brows"
                        variants={browsContainer}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={brows} alt={"brows"} />

                </motion.div>
            </div>
        </section>
    )
}
