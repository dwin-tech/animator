import { motion } from "framer-motion"

import {  useRef } from "react";
import './index.css';
import boy from '../../assets/frame_3/boy.png'
import room from '../../assets/frame_3/room.png'
import shine from '../../assets/frame_3/shine.png'
import message from '../../assets/frame_3/message.png'
import { container, messageContainer } from '.';
import { blackContainer } from "../blackWindow";
import { usePageCenter } from "../usePageCenter";





export function Frame_3() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem}  style={{ paddingTop: "15%",scrollSnapAlign: "center" }}>
            <motion.div className="frameThree"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}
            >
                <div className="computerRoom">
                    <img className="room"
                        src={room} alt={"room"} />
                    <motion.img
                        className="boy"
                        variants={container}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={boy} alt={"boy"} />
                    <motion.div className="shine"
                        variants={container}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
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
        </section >

    )
}
