import message from '../../../assets/episode_2/frame_6/message.png'
import door from '../../../assets/episode_2/frame_6/door.png'
import doorPart from '../../../assets/episode_2/frame_6/doorPart.png'
import guys from '../../../assets/episode_2/frame_6/guys.png'


import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { walking } from "."

import './style.css';

export function Episode_2_Frame_6(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="minutesLater"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="doorOfOffice"
                    src={door} alt={"door"} />

                <motion.img className="partOfDoor"
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={doorPart} alt={"doorPart"} />
                <motion.img className="guysWalking"
                    variants={walking}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={guys} alt={"guys"} />
                <motion.img className="min45"
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}