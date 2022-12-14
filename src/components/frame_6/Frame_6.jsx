import { motion } from "framer-motion"
import one from '../../assets/frame_6/one.png'
import two from '../../assets/frame_6/two.png'
import three from '../../assets/frame_6/three.png'
import four from '../../assets/frame_6/four.png'
import five from '../../assets/frame_6/five.png'
import './index.css';
import { handContainer ,fiveContainer} from "."
import { BlackWindow } from "../blackWindow/BlackWindows"

import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";





export function Frame_6() {


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
        <div  ref={animItem}>
            <div className="frameSix">
            {/* <BlackWindow/> */}

                <img className="one"
                    src={one} alt={"one"} />
               <motion.img
                    variants={handContainer}
                    initial="hidden"
                    animate={vis ? "show" : "hidden"}

                    className="two" src={two} alt={"two"} />
                {/* <motion.img
                    // variants={handContainer}
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ amount: 0.2 }}
                    className="three" src={three} alt={"three"} />  */}

            <motion.img
                // variants={handContainer}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ amount: 0.2 }}
                className="three" src={four} alt={"four"} />
                 <motion.img
                variants={fiveContainer}
                initial="hidden"
                animate={vis ? "show" : "hidden"}

                className="five" src={five} alt={"five"} />
        </div>
        </div>
    )
}
