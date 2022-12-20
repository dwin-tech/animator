

import { motion } from "framer-motion"
import { useRef } from "react";
import { messageCont } from ".";
import boy from '../../assets/frame_13/boy.png'
import shine from '../../assets/frame_13/shine.png'
import timeMessage from '../../assets/frame_13/timeMessage.png'
import { blackContainer } from "../blackWindow";
import { usePageCenter } from "../usePageCenter";


import './index.css';



export function Frame_13() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="thirteen"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="upsetGuy"
                    src={boy} alt={"boy"} />
                <motion.img className="upsetGuyShine"
                    animate={visible ? {
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}

                    src={shine} alt={"shine"} />

                <img className="timeMessage" src={timeMessage} alt={"timeMessage"} />
            </motion.div>
        </section>
    )
}
