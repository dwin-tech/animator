

import { motion } from "framer-motion"
import personTwo from '../../assets/frame_10/personTwo.png'
import wall from '../../assets/frame_10/wall.png'
import personOne from '../../assets/frame_10/personOne.png'
import twoPersonsMessage from '../../assets/frame_10/twoPersonsMessage.png'
import twoPersonsShine from '../../assets/frame_10/twoPersonsShine.png'

import './index.css';
import { messageCont, personTwoContainer } from "."
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { usePageCenter } from "../usePageCenter"
import { blackContainer } from "../blackWindow"


export function Frame_10() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "3%", scrollSnapAlign: "center" }}>
            <motion.div className="framerTen"
             variants={blackContainer}
             initial="hidden"
             whileInView={visible ? "show" : "hidden"}

            >
                <img className="wall"
                    src={wall} alt={"wall"} />
                <img className="personOne"
                    src={personOne} alt={"personOne"} />
                <motion.img className="personTwo"
                    variants={personTwoContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    viewport={{ amount: 0.2 }}

                    src={personTwo} alt={"personTwo"} />
                <motion.img className="twoPersonsShine"
                    animate={visible ? {
                        opacity: [0.6, 0.9, 0.6],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={twoPersonsShine} alt={"twoPersonsShine"} />


                <motion.img className="twoPersonsMessage"
                    variants={messageCont}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={twoPersonsMessage} alt={"twoPersonsMessage"} />

            </motion.div>
        </section>
    )
}
