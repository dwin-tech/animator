import message from '../../../assets/episode_2/frame_8/message.png'
import hand from '../../../assets/episode_2/frame_8/hand.png'
import guys from '../../../assets/episode_2/frame_8/guys.png'


import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { handWave, handMessages } from "."

import './style.css';

export function Episode_2_Frame_8(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="guysAndHandShake"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="guysInOffice"
                    src={guys} alt={"guys"} />

                <motion.img className="handWithRing"
                    variants={handWave}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={hand} alt={"hand"} />
                 <motion.img className="handMessage"
                    variants={handMessages}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}