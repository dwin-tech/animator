import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";


import girls from '../../assets/frame_5/girls.png'
import hand from '../../assets/frame_5/hand.png'
import eyes from '../../assets/frame_5/eyes.png'

import { motion } from "framer-motion"



import './index.css';
import { handContainer } from '.';
import { BlackWindow } from '../blackWindow/BlackWindows';


export function Frame_5() {
    const animItem = useRef();
    const [vis, setVis] = useState(false)
    const height = useWindowHeight()

    function animOnScroll(el, height) {
        const position = window.pageYOffset
        const offsetTop = el?.current?.offsetTop
        const animItemHeight = el?.current?.offsetHeight;
        if (position + (height / 2) > offsetTop + (animItemHeight / 2)) {

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
            <div className="framerFive">
                {/* <BlackWindow/> */}

                <img className="girls"
                    src={girls} alt={"girls"} />
                <motion.img
                    variants={handContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    className="hand" src={hand} alt={"hand"} />

                <motion.img className="eyes"
                    animate={vis ? {
                        opacity: [0.7, 0.9, 0.7],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={eyes} alt={"eyes"} />

            </div>
        </div>
    )
}
