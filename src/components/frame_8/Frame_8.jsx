import { motion } from "framer-motion"
import './index.css';
import employee from '../../assets/frame_8/employee.png'
import window from '../../assets/frame_8/window.png'
import computerShine from '../../assets/frame_8/computerShine.png'
import time from '../../assets/frame_8/time.png'

import twoPerson from '../../assets/frame_8/twoPerson.png'


import { BlackWindow } from "../blackWindow/BlackWindows";
import { twoPersonContainer } from ".";








export function Frame_8() {
    return (
        <div>
            <div className="frameEight">
                {/* <BlackWindow /> */}
                <img className="employee"
                    src={employee} alt={"employee"} />
                <img className="window"
                    src={window} alt={"window"} />
                <motion.img className="computerShine"
                    animate={{
                        opacity: [0.5, 0.7, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}
                    src={computerShine} alt={"computerShine"} />
                <motion.img className="twoPerson"

                    variants={twoPersonContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"


                    src={twoPerson} alt={"twoPerson"} />
                <img className="time"
                    src={time} alt={"twoPetimerson"} />

            </div>
        </div>
    )
}
