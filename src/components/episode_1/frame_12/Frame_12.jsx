

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_12/boy.png'
import girl from '../../../assets/episode_1/frame_12/girl.png'
import shine from '../../../assets/episode_1/frame_12/shine.png'
import message from '../../../assets/episode_1/frame_12/message.png'


import './index.css';
import { evilGirlContainer, evilGirlMessageCont, messageCont } from "."

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { blackContainer } from "../blackWindow"
import { usePageCenter } from "../../usePageCenter"

export function Frame_12() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="framerTwelve"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="sadBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="evilGirl"

                    variants={evilGirlContainer}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
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
                  variants={evilGirlMessageCont}
                  initial="hidden"
                  whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={message} alt={"message"} />

            </motion.div>
        </section>
    )
}
