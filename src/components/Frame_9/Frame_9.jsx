import { motion } from "framer-motion"
import './index.css';


import man from '../../assets/frame_9/man.png'
import manEyes from '../../assets/frame_9/manEyes.png'
import smallShine from '../../assets/frame_9/smallShine.png'

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";







export function Frame_9() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "3%", scrollSnapAlign: "center" }}>
            <motion.div className="frameNine"

                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}

            >
                <img className="man"
                    src={man} alt={"man"} />
                <motion.img className="manEyes"
                    animate={visible ? {
                        opacity: [0.5, 0.7, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 0.9 }}
                    src={manEyes} alt={"manEyes"} />

                <motion.img className="smallShine"
                    animate={visible ? {
                        opacity: [0.4, 0.6, 0.4],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 0.9 }}
                    src={smallShine} alt={"smallShine"} />
            </motion.div>
        </section>
    )
}
