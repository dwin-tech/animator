

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_11/boy.png'
import girl from '../../../assets/episode_1/frame_11/girl.png'
import wall from '../../../assets/episode_1/frame_11/wall.png'
import message from '../../../assets/episode_1/frame_11/message.png'


import './index.css';
import { boyContainer, girlContainer, messageCont } from "."
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { blackContainer } from "../blackWindow"
import { usePageCenter } from "../../usePageCenter"


export function Frame_11() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center" }}>



            <div className="framerEleven">

                <motion.div className="framerElevenBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <img className="blueWall"
                        src={wall} alt={"wall"} />


                    <motion.img className="boyImg"
                        variants={boyContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}

                        src={boy} alt={"boy"} />



                    <img className="girlImg"

                        src={girl} alt={"girl"} />


                    <motion.img className="messageImg"
                        variants={messageCont}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}
                        src={message} alt={"message"} />
                </motion.div>
            </div>
        </section>
    )
}
