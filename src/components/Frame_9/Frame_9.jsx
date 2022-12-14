import { motion } from "framer-motion"
import './index.css';


import man from '../../assets/frame_9/man.png'
import manEyes from '../../assets/frame_9/manEyes.png'
import smallShine from '../../assets/frame_9/smallShine.png'

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";







export function Frame_9() {
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
            <div className="frameNine">
                <img className="man"
                    src={man} alt={"man"} />
                <motion.img className="manEyes"
                animate={vis ? {
                    opacity: [0.6, 0.8, 0.6],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                } : { opacity: 1 }}
                    src={manEyes} alt={"manEyes"} />

                <motion.img className="smallShine"
                animate={vis ? {
                    opacity: [0.5, 0.7, 0.5],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                } : { opacity: 1 }}
                    src={smallShine} alt={"smallShine"} />
            </div>
        </div>
    )
}
