

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_5/back.png'
import hand from '../../../assets/episode_3/frame_5/hand.png'
import message from '../../../assets/episode_3/frame_5/message.png'
import girlHand from '../../../assets/episode_3/frame_5/girlHand.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, handContainer, messageContainer } from "."


export function Episode_3_Frame_5() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_5">
                <motion.div className="episode_3_Frame_5_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_5_back"
                        src={back} alt={"back"} />

                    <motion.img className="episode_3_Frame_5_hand"
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}
                        src={hand} alt={"hand"} />
                    <img className="episode_3_Frame_5_message"
                        src={message} alt={"message"} />
                    <img className="episode_3_Frame_5_girlHand"
                        src={girlHand} alt={"girlHand"} />
               





                </motion.div>
            </div>
        </section>
    )
}
