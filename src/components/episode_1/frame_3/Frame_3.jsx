import { motion } from "framer-motion"
import { useRef } from "react";
import './index.css';
import boy from '../../../assets/episode_1/frame_3/boy.png'
import room from '../../../assets/episode_1/frame_3/room.png'
import shine from '../../../assets/episode_1/frame_3/shine.png'
import message from '../../../assets/episode_1/frame_3/message.png'
import { container, messageContainer } from '.';
import { blackContainer } from "../blackWindow";

export function Frame_3({visible}) {

    return (
        <section>
            <div className="frameThree">
                <motion.div className="frameThreeBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <div className="computerRoom">
                        <img className="room"
                            src={room} alt={"room"} />
                        <motion.img
                            className="boy"
                            variants={container}
                            initial="hidden"
                            animate={visible ? "show" : "hidden"}
                            src={boy} alt={"boy"} />
                        <motion.div className="shine"
                            variants={container}
                            initial="hidden"
                            animate={visible ? "show" : "hidden"}
                        >
                            <motion.img
                                className="shineImg"

                                animate={visible ? {
                                    opacity: [0.5, 0.7, 0.5],
                                    transition:
                                    {
                                        repeat: "Infinity", duration: 1, ease: "linear",
                                    }
                                } : { opacity: 1 }}
                                src={shine} alt={"shine"} />

                        </motion.div>
                        <motion.img
                            variants={messageContainer}
                            initial="hidden"
                            whileInView={visible ? "show" : "hidden"}
                            className="message" src={message} alt={"message"} />
                    </div>
                </motion.div>
                </div>
        </section >

    )
}
