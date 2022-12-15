import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

import street from '../../assets/frame_2/street.png'
import blue from '../../assets/frame_2/blue.png'
import yellow from '../../assets/frame_2/yellow.png'
import green from '../../assets/frame_2/green.png'
import './index.css';
import { carBlueCont,  carGreenContainer, carYellowContainer } from '.';
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";




export function Frame_2() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "10%", scrollSnapAlign: "center",  overflow: "hidden"
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
                    animate={visible ? "show" :  "hidden"}
                    src={green} alt={"green"} />i
                <motion.img className="yellow"
                    variants={carYellowContainer}
                    initial="hidden"
                    exit="exit"

                    animate={visible ? "show" : "hidden"}
                    src={yellow} alt={"yellow"} />
                <motion.img className="blue"
                    variants={carBlueCont}
                    initial="hidden"
                    exit="exit"

                    animate={visible ? "show" : "hidden"}
                    src={blue} alt={"blue"} />
            </motion.div>
        </section>
    )
}
