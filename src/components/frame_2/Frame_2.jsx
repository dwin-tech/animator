import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

import street from '../../assets/frame_2/street.png'
import blue from '../../assets/frame_2/blue.png'
import yellow from '../../assets/frame_2/yellow.png'
import green from '../../assets/frame_2/green.png'
import './index.css';
import { carBlueContainer, carGreenContainer, carYellowContainer } from '.';
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";




export function Frame_2() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem}  style={{ paddingTop: "5%",scrollSnapAlign: "center" }}>
            <motion.div className="frameTwo" 
             variants={blackContainer}
             initial="hidden"
             whileInView={visible ? "show" : "hidden"}  >
          <img className="street"
                    src={street} alt={"street"} /> 
             <motion.img className="green"
                    variants={carGreenContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                     src={green} alt={"green"} />
                <motion.img className="yellow"
                    variants={carYellowContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={yellow} alt={"yellow"} />
                <motion.img className="blue"
                    variants={carBlueContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={blue} alt={"blue"} />  
            </motion.div>
        </section>
    )
}
