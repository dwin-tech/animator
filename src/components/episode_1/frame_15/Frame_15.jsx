

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_15/boy.png'
import shine from '../../../assets/episode_1/frame_15/shine.png'
import message from '../../../assets/episode_1/frame_15/message.png'



import './index.css';
import { messageContent } from ".";
import { blackContainer } from "../blackWindow";
import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";




export function Frame_15() {
   
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="framerFifteen"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="slipBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="slipBoyShine"
                    animate={visible?{
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }:{opacity:1}}
                    src={shine} alt={"shine"} />
                <motion.img className="slipBoyMessage"

                    variants={messageContent}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={message} alt={"message"} />


            </motion.div>
        </section>
    )
}
