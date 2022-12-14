import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";


import bigRoom from '../../assets/frame_4/bigRoom.png'
import runing from '../../assets/frame_4/runing.png'
import lists from '../../assets/frame_4/lists.png'
import mess from '../../assets/frame_4/mess.png'


import './index.css';
import { container, listsContainer, messContainer } from '.'
import { BlackWindow } from '../blackWindow/BlackWindows'


export function Frame_4() {

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
            <div className="frameFour">
            {/* <BlackWindow/> */}

                <img className="room"
                    src={bigRoom} alt={"bigRoom"} />
                <motion.img
                    className="runningGuy"
                    variants={container}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    src={runing} alt={"runing"}

                />
                <motion.img

                    variants={listsContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    className="lists" src={lists} alt={"lists"} />
                <motion.img
                
                variants={messContainer}
                initial="hidden"
                animate={vis ? "show" : "hidden"}

                
                
                className="mess" src={mess} alt={"mess"} />

            </div>
        </div>
    )
}
