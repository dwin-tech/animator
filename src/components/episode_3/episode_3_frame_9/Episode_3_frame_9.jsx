import message1 from '../../../assets/episode_3/frame_9/message1.png'
import message2 from '../../../assets/episode_3/frame_9/message2.png'
import brownDogEyes from '../../../assets/episode_3/frame_9/brownDogEyes.png'
import brownDogTongue from '../../../assets/episode_3/frame_9/brownDogTongue.png'
import mainPhoto from '../../../assets/episode_3/frame_9/mainPhoto.png'
import whiteDogEyes from '../../../assets/episode_3/frame_9/whiteDogEyes.png'
import whiteDogJay from '../../../assets/episode_3/frame_9/whiteDogJay.png'

import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { dogsMessages1, dogsMessages2 } from "."

import './style.css';

export function Episode_3_Frame_9(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="everTry"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="mainPhoto"
                    src={mainPhoto} alt={"mainPhoto"} />

                <motion.img className="whiteDogJay"
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={whiteDogJay} alt={"whiteDogJay"} />
                <motion.img className="brownDogTongue"
                    // variants={}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={brownDogTongue} alt={"brownDogTonguebrownDogTongue"} />
                <motion.img className="whiteDogEyes"

                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={whiteDogEyes} alt={"whiteDogEyes"} />
                <motion.img className="brownDogEyes"
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={brownDogEyes} alt={"vertical"}/>
                <motion.img className="brownDogMessage"
                    variants={dogsMessages1}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={message1} alt={"vertical"}/>
                <motion.img className="whiteDogsMessages2"
                    variants={dogsMessages2}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={message2} alt={"vertical"} />
            </motion.div>
        </section>
    )
}