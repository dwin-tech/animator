

import { motion } from "framer-motion"
import boy from '../../assets/frame_11/boy.png'
import girl from '../../assets/frame_11/girl.png'
import wall from '../../assets/frame_11/wall.png'
import message from '../../assets/frame_11/message.png'


import './index.css';
import { boyContainer, girlContainer, messageCont } from "."
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { usePageCenter } from "../usePageCenter"
import { blackContainer } from "../blackWindow"


export function Frame_11() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center" }}>
            <motion.div className="framerEleven"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >
                <img className="blueWall"
                    src={wall} alt={"wall"} />


                <motion.img className="boyImg"
                    variants={boyContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"} 

                    src={boy} alt={"boy"} />



                <img className="girlImg"
                    
                    src={girl} alt={"girl"} />


                <motion.img className="messageImg"
                    variants={messageCont}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"} 
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}
