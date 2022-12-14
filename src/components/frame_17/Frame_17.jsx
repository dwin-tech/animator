


import { useWindowHeight } from "@react-hook/window-size"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRef } from "react"
import animOnScroll, { carContainer, nightContainer, onLight, starShow } from "."
import back from '../../assets/frame_17/back.png'
import carLight from '../../assets/frame_17/carLight.png'
import stars from '../../assets/frame_17/stars.png'
import street from '../../assets/frame_17/street.png'
import streetWindows from '../../assets/frame_17/streetWindows.png'



import './index.css';




export function Frame_17() {
    const animItem = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const height = useWindowHeight()



    function animOnScroll(el, height) {
        const position = window.pageYOffset
        const offsetTop = el?.current?.offsetTop
        // console.log("🚀 ~ file: Frame_17.jsx:33 ~ animOnScroll ~ offsetTop", offsetTop)
        const animItemHeight = el?.current?.offsetHeight;
        // if (position + (height / 2) == offsetTop + (animItemHeight / 2)) {

        //     console.log('====================================');
        //     console.log("hasar");
        //     console.log('====================================');

        // } else {
        //     console.log('====================================');
        //     console.log("asasasas");
        //     console.log('====================================');

        // }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => animOnScroll(animItem, height));
        return () =>
            window.removeEventListener("scroll", () => animOnScroll(animItem, height));
    }, []);








    return (
        <div
            ref={animItem}
        >
            <div

                className="framerSeventeen">
                <div className="nightBackground">

                    <img className="streetTwo"
                        src={street} alt={"street"} />
                    <motion.img className="stars"

                        variants={starShow}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"

                        src={stars} alt={"stars"} />
                    <motion.img className="backTwo"
                        variants={nightContainer}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={back} alt={"back"} />
                    <motion.img className="streetWindows"
                        variants={onLight}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={streetWindows} alt={"streetWindows"} />
                    <motion.img className="carLight"
                        variants={carContainer}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={carLight} alt={"carLight"} />
                </div>




            </div>
        </div>
    )
}
