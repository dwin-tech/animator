import message1 from '../../../assets/episode_2/frame_9/message_1.png'
import message2 from '../../../assets/episode_2/frame_9/message_2.png'
import background from '../../../assets/episode_2/frame_9/background.png'
import dogs from '../../../assets/episode_2/frame_9/dogs.png'
import leftJaw from '../../../assets/episode_2/frame_9/left_jaw.png'
import rightJaw from '../../../assets/episode_2/frame_9/right_jaw.png'

import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../../episode_1/blackWindow"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { leftDogJaw, rightDogJaw, dogsMessages1, dogsMessages2 } from "."

import './style.css';

export function Episode_2_Frame_9(){
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <motion.div className="dogsContainer"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="backgroundPhoto"
                    src={background} alt={"background"} />

                <motion.img className="guysAndDogs"
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={dogs} alt={"dogs"} />
                <motion.img className="leftJaw"
                    variants={leftDogJaw}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={leftJaw} alt={"leftJaw"} />
                <motion.img className="rightJaw"

                    variants={rightDogJaw}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={rightJaw} alt={"rightJaw"} />

                <motion.img className="dogsMessages1"
                    variants={dogsMessages1}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={message1} alt={"vertical"}/>
                <motion.img className="dogsMessages2"
                    variants={dogsMessages2}
                    initial="hidden"
                    whileInView={visible && "show" }
                    viewport={{ once: true }}
                    src={message2} alt={"vertical"} />
            </motion.div>
        </section>
    )
}