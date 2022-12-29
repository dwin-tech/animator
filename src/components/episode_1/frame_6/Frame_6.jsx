import { motion } from "framer-motion"
import one from '../../../assets/episode_1/frame_6/one.png'
import two from '../../../assets/episode_1/frame_6/two.png'
import three from '../../../assets/episode_1/frame_6/three.png'
import four from '../../../assets/episode_1/frame_6/four.png'
import five from '../../../assets/episode_1/frame_6/five.png'
import './index.css';
import { handContainer, fiveContainer } from "."

import { blackContainer } from "../blackWindow"

export function Frame_6({ visible }) {

    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <div className="frameSix" >
                <motion.div className="xxxx"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <img className="one"
                        src={one} alt={"one"} />
                    <motion.img
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="two" src={two} alt={"two"} />
                    <motion.img
                        className="three" src={four} alt={"four"} />
                    <motion.img
                        variants={fiveContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="five" src={five} alt={"five"} />
                </motion.div>
            </div>
        </section>
    )
}
