import { AnimatePresence, motion, useScroll } from "framer-motion";


import './index.css';
import { boxOne, threeBox, twoBox, birdsContainer, birdsContainerSmall } from ".";

import one from '../../assets/frame_1/one.png'
import two from '../../assets/frame_1/two.png'
import three from '../../assets/frame_1/three.png'
import birds from '../../assets/frame_1/birds.png'
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";




export function Frame_1() {
    const width = useWindowWidth();
    const animItem = useRef();
    const [vis, setVis] = useState(false)
    const height = useWindowHeight()

    function animOnScroll(el, height) {
        const position = window.pageYOffset
        const offsetTop = el?.current?.offsetTop
        const animItemHeight = el?.current?.offsetHeight;
        if (position + (height / 2) > offsetTop + (animItemHeight / 2) ) {

            setVis(true)

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => animOnScroll(animItem, height));
        return () =>
            window.removeEventListener("scroll", () => animOnScroll(animItem, height));
    }, []);






    return (
        <div ref={animItem}>
            <div className="frameOne"    >

                <motion.img variants={twoBox}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    className="img2" src={two} alt={"two"}
                    viewport={{ amount: 0.2 }} />
                <motion.img className="img3" variants={threeBox}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    src={three} alt={"three"}
                    viewport={{ amount: 0.2 }} />
                <motion.img variants={boxOne}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    className="img"
                    viewport={{ amount: 0.2 }}
                    src={one} alt={"one"} />
                <motion.img variants={birdsContainerSmall(width)}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    className="birds" src={birds} alt={"birds"}
                    viewport={{ amount: 0.2 }}
                />


            </div>



        </div>
    )
}
