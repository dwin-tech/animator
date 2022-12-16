import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";


import girls from '../../assets/frame_5/girls.png'
import hand from '../../assets/frame_5/hand.png'
import eyes from '../../assets/frame_5/eyes.png'

import { motion } from "framer-motion"



import './index.css';
import { handContainer } from '.';
import { BlackWindow } from '../blackWindow/BlackWindows';
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";


export function Frame_5() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center" }}>
            <motion.div className="framerFive"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}>
                <img className="girls"
                    src={girls} alt={"girls"} />
                <motion.img
                    variants={handContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}

                    className="hand" src={hand} alt={"hand"} />

                <motion.img className="eyes"
                    animate={visible ? {
                        opacity: [0.7, 0.9, 0.7],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={eyes} alt={"eyes"} />

            </motion.div>
        </section>
    )
}
