

import { motion } from "framer-motion"
import back from '../../../assets/episode_2/frame_10/back.png'
import img from '../../../assets/episode_2/frame_10/img.png'
import message from '../../../assets/episode_2/frame_10/message.png'





import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer,  messageContainer} from "."


export function Episode_2_Frame_10() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_2_Frame_10">
                <motion.div className="episode_2_Frame_10_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_2_Frame_1_img"
                        src={img} alt={"img"} />
                    <img className="episode_2_Frame_1_back"
                        src={back} alt={"back"} />
                    <motion.img className="episode_2_Frame_1_message"
                        variants={messageContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        src={message} alt={"message"}
                      />
                </motion.div>
            </div>
        </section>
    )
}
