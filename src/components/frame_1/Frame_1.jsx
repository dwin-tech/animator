import { AnimatePresence, motion, useScroll } from "framer-motion";


import './index.css';
import { boxOne, threeBox, twoBox, birdsContainer, birdsContainerSmall, aaaaa } from ".";

import one from '../../assets/frame_1/one.png'
import two from '../../assets/frame_1/two.png'
import three from '../../assets/frame_1/three.png'
import birds from '../../assets/frame_1/birds.png'
import { useWindowWidth } from "@react-hook/window-size";
import { useRef } from "react";
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";




export function Frame_1() {
    const width = useWindowWidth();
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section style={{ marginTop: "3%" ,scrollSnapAlign: "center"}}>
            <div ref={animItem}>
                <motion.div className="frameOne"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <motion.img variants={twoBox}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        className="img2" src={two} alt={"two"}
                    />
                    <motion.img className="img3" variants={threeBox}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        src={three} alt={"three"}
                    />
                    <motion.img variants={boxOne}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        className="img"

                        src={one} alt={"one"} />
                    <motion.img variants={aaaaa}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        className="birds" src={birds} alt={"birds"}
                    />
                </motion.div>
            </div>
        </section>
    )
}
