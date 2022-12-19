import { motion } from "framer-motion"
import one from '../../assets/frame_6/one.png'
import two from '../../assets/frame_6/two.png'
import three from '../../assets/frame_6/three.png'
import four from '../../assets/frame_6/four.png'
import five from '../../assets/frame_6/five.png'
import './index.css';
import { handContainer, fiveContainer, blackContainerFrame6 } from "."
import { BlackWindow } from "../blackWindow/BlackWindows"

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { usePageCenter } from "../usePageCenter"
import { blackContainer } from "../blackWindow"





export function Frame_6() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center" }}>
            <motion.div className="frameSix"
                variants={blackContainerFrame6}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >
                <img className="one"
                    src={one} alt={"one"} />
                <motion.img
                    variants={handContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}

                    className="two" src={two} alt={"two"} />


                <motion.img

                    className="three" src={four} alt={"four"} />
                <motion.img
                    variants={fiveContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}

                    className="five" src={five} alt={"five"} />
            </motion.div>
        </section>
    )
}
