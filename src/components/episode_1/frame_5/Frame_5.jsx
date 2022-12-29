import girls from '../../../assets/episode_1/frame_5/girls.png'
import hand from '../../../assets/episode_1/frame_5/hand.png'
import eyes from '../../../assets/episode_1/frame_5/eyes.png'
import { motion } from "framer-motion"
import './index.css';
import { handContainer } from '.';
import { blackContainer } from "../blackWindow";
export function Frame_5({visible}) {

    return (
        <section >
            <div className="framerFive">
                <motion.div className="framerFiveBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <img className="girls"
                        src={girls} alt={"girls"} />
                    <motion.img
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="hand" src={hand} alt={"hand"} />
                    <motion.img className="eyes"
                        animate={visible ? {
                            opacity: [0.7, 0.9, 0.7],
                            transition:
                            {
                                delay: 0.5, repeat: "Infinity", duration: 1, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={eyes} alt={"eyes"} />
                </motion.div>
            </div>
        </section>
    )
}
