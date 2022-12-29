

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_11/boy.png'
import girl from '../../../assets/episode_1/frame_11/girl.png'
import wall from '../../../assets/episode_1/frame_11/wall.png'
import message from '../../../assets/episode_1/frame_11/message.png'
import './index.css';
import { boyContainer, girlContainer, messageCont } from "."
import { blackContainer } from "../blackWindow"


export function Frame_11({ visible }) {
    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <div className="framerEleven">
                <motion.div className="framerElevenBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <img className="blueWall"
                        src={wall} alt={"wall"} />
                    <motion.img className="boyImg"
                        variants={boyContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        src={boy} alt={"boy"} />
                    <img className="girlImg"
                        src={girl} alt={"girl"} />
                    <motion.img className="messageImg"
                        variants={messageCont}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={message} alt={"message"} />
                </motion.div>
            </div>
        </section>
    )
}
