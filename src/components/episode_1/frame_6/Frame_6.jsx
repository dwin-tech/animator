import { motion } from "framer-motion"
import one from '../../../assets/episode_1/frame_6/one.png'
import two from '../../../assets/episode_1/frame_6/two.png'
import three from '../../../assets/episode_1/frame_6/three.png'
import four from '../../../assets/episode_1/frame_6/four.png'
import five from '../../../assets/episode_1/frame_6/five.png'
import './index.css';
import { handContainer, fiveContainer, blackContainerFrame6 } from "."
import { BlackWindow } from "../blackWindow/BlackWindows"

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { blackContainer } from "../blackWindow"
import { usePageCenter } from "../../usePageCenter"





export function Frame_6() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="frameSix" >

                <motion.div className="xxxx"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    >
                    <img className="one"
                        src={one} alt={"one"} />
                    <motion.img
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}

                        className="two" src={two} alt={"two"} />


                    <motion.img

                        className="three" src={four} alt={"four"} />
                    <motion.img
                        variants={fiveContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}

                        className="five" src={five} alt={"five"} />
                </motion.div>
                </div>
        </section>
    )
}
