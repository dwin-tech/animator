

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_4/back.png'
import hand from '../../../assets/episode_3/frame_4/hand.png'
import message from '../../../assets/episode_3/frame_4/message.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, handContainer, messageContainer } from "."


export function Episode_3_Frame_4() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_4">
                <motion.div className="episode_3_Frame_4_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_4_back"
                        src={back} alt={"back"} />
                    <motion.img className="episode_3_Frame_4_hand"
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible && "show"}
                        viewport={{ once: true }}
                        src={hand} alt={"hand"} />
                    <img className="episode_3_Frame_4_message"
                        src={message} alt={"message"} />






                </motion.div>
            </div>
        </section>
    )
}
