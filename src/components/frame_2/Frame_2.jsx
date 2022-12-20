import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

import street from '../../assets/frame_2/street.png'
import blue from '../../assets/frame_2/blue.png'
import yellow from '../../assets/frame_2/yellow.png'
import green from '../../assets/frame_2/green.png'
import './index.css';
import { carBlueCont, carGreenContainer, carYellowContainer } from '.';
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";




export function Frame_2() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{
            marginTop: "15%", scrollSnapAlign: "center", overflow: "hidden"
        }}>
            <motion.div className="frameTwo"
                variants={blackContainer}
                initial="hidden"
                animate={visible ? "show" : "hidden"}  >
                <img className="street"
                    src={street} alt={"street"} />
                <motion.img className="green"
                    variants={carGreenContainer}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                    src={green} alt={"green"} />i
    

                <motion.div
                    className="yellowCarDiv"
                    variants={carYellowContainer}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                >
                    <motion.img
                        className="yellow"
                        animate={visible ? {
                            opacity: 0,
                            transition:
                            {
                                delay: 0.5,
                                duration: 1, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={yellow} alt={"yellow"} />
                </motion.div>

                 <motion.div
                    className="blueCarDiv"
                    variants={carBlueCont}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                >
                    <motion.img
                        className="blue"
                        animate={visible ? {
                            opacity: 0.2,
                            transition:
                            {
                                delay: 0.1,
                                duration: 1.7, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={blue} alt={"blue"} />
                </motion.div> 

            </motion.div>
        </section>
    )
}
