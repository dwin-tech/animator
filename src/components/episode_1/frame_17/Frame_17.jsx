import { motion } from "framer-motion"
import { carContainer, nightContainer, onLight, starShow } from "."
import back from '../../../assets/episode_1/frame_17/back.png'
import carLight from '../../../assets/episode_1/frame_17/carLight.png'
import stars from '../../../assets/episode_1/frame_17/stars.png'
import street from '../../../assets/episode_1/frame_17/street.png'
import streetWindows from '../../../assets/episode_1/frame_17/streetWindows.png'
import { blackContainer } from "../blackWindow"
import './index.css';

export function Frame_17({ visible }) {
    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <motion.div className="framerSeventeen"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >
                <div className="nightBackground">
                    <img className="streetTwo"
                        src={street} alt={"street"} />
                    <motion.img className="stars"
                        variants={starShow}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={stars} alt={"stars"} />
                    <motion.img className="backTwo"
                        variants={nightContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={back} alt={"back"} />
                    <motion.img className="streetWindows"
                        variants={onLight}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={streetWindows} alt={"streetWindows"} />
                    <motion.div
                        className="carLightDiv"
                        variants={carContainer}
                        initial="hidden"
                        exit="exit"
                        animate={visible ? "show" : "hidden"}
                    >
                        <motion.img
                            className="carLight"
                            animate={visible ? {
                                opacity: 0,
                                transition:
                                {
                                    delay: 2,
                                    duration: 1.7, ease: "linear",
                                }
                            } : { opacity: 1 }}
                            src={carLight} alt={"carLight"} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
