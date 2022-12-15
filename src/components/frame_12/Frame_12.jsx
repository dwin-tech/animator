

import { motion } from "framer-motion"
import boy from '../../assets/frame_12/boy.png'
import girl from '../../assets/frame_12/girl.png'
import shine from '../../assets/frame_12/shine.png'
import message from '../../assets/frame_12/message.png'


import './index.css';
import { evilGirlContainer, messageCont } from "."

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { usePageCenter } from "../usePageCenter"
import { blackContainer } from "../blackWindow"

export function Frame_12() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center" }}>
            <motion.div className="framerTwelve"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="sadBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="evilGirl"

                    variants={evilGirlContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={girl} alt={"girl"} />

                <motion.img className="backCompShine"
                animate={visible?{
                    opacity: [0.6, 0.9, 0.6],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                }:{opacity:1}}
                    src={shine} alt={"shine"} />

                <motion.img className="checkMessage"
                  variants={messageCont}
                  initial="hidden"
                  whileInView={visible ? "show" : "hidden"} 
                    src={message} alt={"message"} />

            </motion.div>
        </section>
    )
}
