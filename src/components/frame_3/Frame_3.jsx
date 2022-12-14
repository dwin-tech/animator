import { motion } from "framer-motion"

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import './index.css';
import boy from '../../assets/frame_3/boy.png'
import room from '../../assets/frame_3/room.png'
import shine from '../../assets/frame_3/shine.png'
import message from '../../assets/frame_3/message.png'
import { container, messageContainer } from '.';





export function Frame_3() {
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
        <div className="frameThree"
            ref={animItem}>
            <div className="computerRoom">
                <img className="room"
                    src={room} alt={"room"} />
                <motion.img
                    className="boy"
                    variants={container}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    src={boy} alt={"boy"} />
                <motion.div className="shine"
                    variants={container}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                >
                    <motion.img
                        className="shineImg"

                        animate={vis ? {
                            opacity: [0.5, 0.7, 0.5],
                            transition:
                            {
                                repeat: "Infinity", duration: 1, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={shine} alt={"shine"} />

                </motion.div>
                <motion.img
                    variants={messageContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}
                    className="message" src={message} alt={"message"} />
            </div>
        </div>
    )
}
