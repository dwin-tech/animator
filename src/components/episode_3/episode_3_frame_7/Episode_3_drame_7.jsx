

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_7/back.png'
import boy from '../../../assets/episode_3/frame_7/boy.png'
import girl from '../../../assets/episode_3/frame_7/girl.png'

import message from '../../../assets/episode_3/frame_7/message.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, messageContainer } from "."


export function Episode_3_Frame_7() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_7">
                <motion.div className="episode_3_Frame_7_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_7_back"
                        src={back} alt={"back"} />

                    <img className="episode_3_Frame_7_message"
                        src={message} alt={"message"} />


                    <img className="episode_3_Frame_7_boy"
                        src={boy} alt={"boy"} />
                    <img className="episode_3_Frame_7_girl"
                        src={girl} alt={"girl"} />

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
