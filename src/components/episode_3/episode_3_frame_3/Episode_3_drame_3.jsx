

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_3/back.png'
import finger from '../../../assets/episode_3/frame_3/finger.png'
import hands from '../../../assets/episode_3/frame_3/hands.png'
import message from '../../../assets/episode_3/frame_3/message.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, messageContainer } from "."


export function Episode_3_Frame_3() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_3">
                <motion.div className="episode_3_Frame_3_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_3_back"
                        src={back} alt={"back"} />
                    <img className="episode_3_Frame_3_finger"
                        src={finger} alt={"finger"} />
                    <img className="episode_3_Frame_3_hands"
                        src={hands} alt={"hands"} />
                    <motion.img className="episode_3_Frame_3_message"
                        src={message} alt={"message"}
                        variants={messageContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }} />





                </motion.div>
            </div>
        </section>
    )
}
