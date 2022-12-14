

import { motion } from "framer-motion"
import boy from '../../assets/frame_12/boy.png'
import girl from '../../assets/frame_12/girl.png'
import shine from '../../assets/frame_12/shine.png'
import message from '../../assets/frame_12/message.png'


import './index.css';
import { evilGirlContainer, messageCont } from "."

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

export function Frame_12() {
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
            <div className="framerTwelve">

                <img className="sadBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="evilGirl"

                    variants={evilGirlContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={girl} alt={"girl"} />

                <motion.img className="backCompShine"
                animate={{
                    opacity: [0.6, 0.9, 0.6],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                }}
                viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />

                <motion.img className="checkMessage"
                  variants={messageCont}
                  initial="hidden"
                  // animate="show"
                  whileInView="show"
                    src={message} alt={"message"} />

            </div>
        </div>
    )
}
