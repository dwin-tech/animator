import { motion } from "framer-motion"
import './index.css';
import employee from '../../assets/frame_8/employee.png'
import window from '../../assets/frame_8/window.png'
import computerShine from '../../assets/frame_8/computerShine.png'
import time from '../../assets/frame_8/time.png'

import twoPerson from '../../assets/frame_8/twoPerson.png'


import { BlackWindow } from "../blackWindow/BlackWindows";
import { twoPersonContainer } from ".";
import { usePageCenter } from "../usePageCenter";
import { blackContainer } from "../blackWindow";
import { useRef } from "react";








export function Frame_8() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem}  style={{ marginTop: "10%",scrollSnapAlign: "center" }}>
            <motion.div className="frameEight"
            
            variants={blackContainer}
            initial="hidden"
            whileInView={visible ? "show" : "hidden"}          
            >
                <img className="employee"
                    src={employee} alt={"employee"} />
                <img className="window"
                    src={window} alt={"window"} />
                <motion.img className="computerShine"
                    animate={visible?{
                        opacity: [0.5, 0.7, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    }:{opacity:1}}
                    viewport={{ amount: 0.2 }}
                    src={computerShine} alt={"computerShine"} />
                <motion.img className="twoPerson"

                    variants={twoPersonContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}


                    src={twoPerson} alt={"twoPerson"} />
                <img className="time"
                    src={time} alt={"twoPetimerson"} />

            </motion.div>
        </section>
    )
}
