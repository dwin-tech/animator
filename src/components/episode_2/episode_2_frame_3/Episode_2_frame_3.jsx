

import { motion } from "framer-motion"
import back from '../../../assets/episode_2/frame_3/back.png'
import hand from '../../../assets/episode_2/frame_3/hand.png'
import hand2 from '../../../assets/episode_2/frame_3/hand2.png'
import guy from '../../../assets/episode_2/frame_3/guy.png'
import board from '../../../assets/episode_2/frame_3/board.png'
import message from '../../../assets/episode_2/frame_3/message.png'







import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter"
import { blackContainer, boardContainer,  handContainer, messageContainer } from "."



export function Episode_2_Frame_3() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_2_Frame_3">
                <motion.div className="episode_2_Frame_3_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >

                    <img className="episode_2_Frame_3_back"
                        src={back} alt={"back"}
                    />

                    <motion.img className="episode_2_Frame_3_board"
                        variants={boardContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                        src={board} alt={"board"}
                    />
                    <img className="episode_2_Frame_3_guy"
                        src={guy} alt={"guy"}
                    />
                    <motion.img className="episode_2_Frame_3_hand2"
                        // variants={hand2Container}
                        // initial="hidden"
                        // animate={visible ? "show" : "hidden"}
                        src={hand2} alt={"hand2"}
                    />
                    <motion.img className="episode_2_Frame_3_hand"
                        variants={handContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                        src={hand} alt={"hand"}
                    />

                    <motion.img className="episode_2_Frame_3_message"
                        variants={messageContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                        src={message} alt={"message"}
                    />
                </motion.div>
            </div>
        </section>
    )
}
