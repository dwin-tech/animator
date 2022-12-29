

import { motion } from "framer-motion"
import boy from '../../../assets/episode_1/frame_12/boy.png'
import girl from '../../../assets/episode_1/frame_12/girl.png'
import shine from '../../../assets/episode_1/frame_12/shine.png'
import message from '../../../assets/episode_1/frame_12/message.png'
import './index.css';
import { evilGirlContainer, evilGirlMessageCont } from "."
import { blackContainer } from "../blackWindow"

export function Frame_12({visible}) {
    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <motion.div className="framerTwelve"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="sadBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="evilGirl"

                    variants={evilGirlContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={girl} alt={"girl"} />

                <motion.img className="backCompShine"
                    animate={visible ? {
                        opacity: [0.6, 0.9, 0.6],

                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={shine} alt={"shine"} />

                <motion.img className="checkMessage"
                    variants={evilGirlMessageCont}
                    initial="hidden"
                    exit="exit"
                    whileInView={visible ? "show" : "hidden"}
                    src={message} alt={"message"} />

            </motion.div>
        </section>
    )
}
