import { motion } from "framer-motion"
import './index.css';
import employee from '../../../assets/episode_1/frame_8/employee.png'
import window from '../../../assets/episode_1/frame_8/window.png'
import computerShine from '../../../assets/episode_1/frame_8/computerShine.png'
import time from '../../../assets/episode_1/frame_8/time.png'
import twoPerson from '../../../assets/episode_1/frame_8/twoPerson.png'
import { twoPersonContainer } from ".";
import { blackContainer } from "../blackWindow";

export function Frame_8({ visible }) {

    return (
        <section style={{ scrollSnapAlign: "center" }}>
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
                    animate={visible ? {
                        opacity: [0.5, 0.7, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    } : { opacity: 1 }}
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
