

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_4/back.png'
import hand from '../../../assets/episode_3/frame_4/hand.png'
import message from '../../../assets/episode_3/frame_4/message.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, messageContainer } from "."


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
                    <img className="episode_3_Frame_4_hand"
                        src={hand} alt={"hand"} />
                    <img className="episode_3_Frame_4_message"
                        src={message} alt={"message"} />
                    {/* <motion.img className="episode_3_Frame_3_message"
                        src={message} alt={"message"}
                        variants={messageContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"} /> */}





                </motion.div>
            </div>
        </section>
    )
}
