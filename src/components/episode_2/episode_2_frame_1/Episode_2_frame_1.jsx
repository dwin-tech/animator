

import { motion } from "framer-motion"
import room from '../../../assets/episode_2/frame_1/room.png'
import threePeople from '../../../assets/episode_2/frame_1/threePeople.png'
import window from '../../../assets/episode_2/frame_1/window.png'
import shine from '../../../assets/episode_2/frame_1/shine.png'
import onePerson from '../../../assets/episode_2/frame_1/onePerson.png'
import message1 from '../../../assets/episode_2/frame_1/message1.png'
import message2 from '../../../assets/episode_2/frame_1/message2.png'
import message3 from '../../../assets/episode_2/frame_1/message3.png'
import what from '../../../assets/episode_2/frame_1/what.png'




import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, boyWithComputerContainer, messageOneContainer, messageThreeContainer, messageTwoContainer, personEyesContainer } from "."


export function Episode_2_Frame_1() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_2_Frame_1">
                <motion.div className="episode_2_Frame_1_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_2_Frame_1_threePeople"
                        src={threePeople} alt={"threePeople"} />
                    <img className="episode_2_Frame_1_room"
                        src={room} alt={"room"} />
                    <img className="episode_2_Frame_1_window"
                        src={window} alt={"window"} />
                    <motion.img className="episode_2_Frame_1_shine"
                    animate={ {
                        opacity: [0.5, 0.9, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    } }
                    viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />
                    <motion.img className="episode_2_Frame_1_message"
                        src={message1} alt={"message1"}
                        variants={messageOneContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }} />
                    <motion.img className="episode_2_Frame_1_message"
                        src={message2} alt={"message2"}
                        variants={messageTwoContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                    />
                    <motion.img className="episode_2_Frame_1_message"
                        src={message3} alt={"message3"}
                        variants={messageThreeContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                    />
                    <motion.img className="episode_2_Frame_1_onePerson"
                        variants={boyWithComputerContainer}
                        whileInView={visible && "show" }
                    viewport={{ once: true }}
                        src={onePerson} alt={"onePerson"} />

                        <motion.img className="episode_2_Frame_1_eyes" src={what} alt={"what"} 
                        variants={personEyesContainer}
                        initial="hidden"
                        whileInView={visible && "show" }
                        viewport={{ once: true }}
                        />
                </motion.div>
            </div>
        </section>
    )
}
