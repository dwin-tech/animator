

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


export function Frame_10() {
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
            <div className="framerTen">
                <img className="wall"
                    src={wall} alt={"wall"} />
                <img className="personOne"
                    src={personOne} alt={"personOne"} />
                <motion.img className="personTwo"
                    variants={personTwoContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    viewport={{ amount: 0.2 }}

                    src={personTwo} alt={"personTwo"} />
                <motion.img className="twoPersonsShine"
                    animate={vis ? {
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
                    animate={vis ? "show" : "hidden"}

                    src={twoPersonsMessage} alt={"twoPersonsMessage"} />

            </div>
        </div>
    )
}
