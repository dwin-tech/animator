import message from '../../../assets/episode_2/frame_7/message.png'
import hand from '../../../assets/episode_2/frame_7/hand.png'
import guys from '../../../assets/episode_2/frame_7/guys.png'
import mouth from '../../../assets/episode_2/frame_7/mouth.png'
import office from '../../../assets/episode_2/frame_7/office.png'


import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { speaking, handWave, curlsMessages } from "."

import './style.css';

export function Episode_2_Frame_7(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="opportunityForUs"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="onlyOffice"
                    src={office} alt={"office"} />

                <motion.img className="guysSittingInOffice"
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={guys} alt={"guys"} />
                <motion.img className="mouth"
                    variants={speaking}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={mouth} alt={"mouth"} />
                <motion.img className="handOfCurl"
                    variants={handWave}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={hand} alt={"hand"} />
                <motion.img className="messageOfCurl"
                    variants={curlsMessages}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}