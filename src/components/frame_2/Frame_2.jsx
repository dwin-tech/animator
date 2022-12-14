import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

import street from '../../assets/frame_2/street.png'
import blue from '../../assets/frame_2/blue.png'
import yellow from '../../assets/frame_2/yellow.png'
import green from '../../assets/frame_2/green.png'
import './index.css';
import { carBlueContainer, carGreenContainer, carYellowContainer } from '.';




export function Frame_2() {
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
            <div className="frameTwo"   >
          <img className="street"
                    src={street} alt={"street"} /> 
             <motion.img className="green"
                    variants={carGreenContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                     src={green} alt={"green"} />
                <motion.img className="yellow"
                    variants={carYellowContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    src={yellow} alt={"yellow"} />
                <motion.img className="blue"
                    variants={carBlueContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    src={blue} alt={"blue"} />  
            </div>
        </div>
    )
}
