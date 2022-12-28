import blondeEyes from '../../../assets/episode_3/frame_8/blondeEyes.png'
import blondeHand from '../../../assets/episode_3/frame_8/blondeHand.png'
import curlEyes from '../../../assets/episode_3/frame_8/curlEyes.png'
import curlHand from '../../../assets/episode_3/frame_8/curlHand.png'
import nerdEyes from '../../../assets/episode_3/frame_8/nerdEyes.png'
import nerdFinger from '../../../assets/episode_3/frame_8/nerdFinger.png'
import nerdMessage from '../../../assets/episode_3/frame_8/nerdMessage.png'
import nerdMouth from '../../../assets/episode_3/frame_8/nerdMouth.png'
import surprisedGuys from '../../../assets/episode_3/frame_8/surprisedGuys.png'
import unknownMouth from '../../../assets/episode_3/frame_8/unknownMouth.png'

import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { curlHandContainer, eyesOneContainer, eyesTwoContainer, fingerContainer, message } from "."

import './style.css';

export function Episode_3_Frame_8(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="outLoud"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="mainPhoto"
                    src={surprisedGuys} alt={"surprisedGuys"} />

                <motion.img className="nerdEyes"
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={nerdEyes} alt={"nerdEyes"} />
                <motion.img className="nerdMouth"
                    // variants={}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={nerdMouth} alt={"nerdMouth"} />
                <motion.img className="curlEyes"
                    variants={eyesOneContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={curlEyes} alt={"curlEyes"} />
                <motion.img className="greenEyes"
                    variants={eyesTwoContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={blondeEyes} alt={"blondeEyes"}/>
                <motion.img className="blondeHand"
                    // variants={}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={blondeHand} alt={"blondeHand"}/>
                <img className="curlHand"
                    // variants={curlHandContainer}
                    // initial="hidden"
                    // whileInView={visible ? "show" : "hidden"} 
                    src={curlHand} alt={"curlHand"} /> 
                <motion.img className="nerdFinger"
                    variants={fingerContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={nerdFinger} alt={"nerdFinger"} />
                <motion.img className="nerdMessage"
                    variants={message}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={nerdMessage} alt={"nerdMessage"} />
            </motion.div>
        </section>
    )
}