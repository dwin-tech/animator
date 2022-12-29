

import { motion } from "framer-motion"
import back from '../../../assets/episode_2/frame_2/back.png'
import threePersons from '../../../assets/episode_2/frame_2/threePersons.png'
import hand from '../../../assets/episode_2/frame_2/hand.png'
import message1 from '../../../assets/episode_2/frame_2/message1.png'
import message2 from '../../../assets/episode_2/frame_2/message2.png'

import window from '../../../assets/episode_2/frame_2/window.png'
import windowShine from '../../../assets/episode_2/frame_2/windowShine.png'
import compShine from '../../../assets/episode_2/frame_2/compShine.png'






import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter"
import { blackContainer } from "../episode_2_frame_1"
import { handContainer, messageOneContainer, messageTwoContainer, windowShineContainer } from "."



export function Episode_2_Frame_2() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center"}}>
            <div className="episode_2_Frame_2">
                <motion.div className="episode_2_Frame_2_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_2_Frame_2_back"
                        src={back} alt={"back"} />
                    <img className="episode_2_Frame_2_window"
                        src={window} alt={"window"} />
                    <motion.img className="episode_2_Frame_2_windowShine"
                        src={windowShine} alt={"windowShine"}
                        variants={windowShineContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                        />

                    <img className="episode_2_Frame_2_threePersons"
                        src={threePersons} alt={"threePersons"} />
                    <motion.img className="episode_2_Frame_2_hand"
                        src={hand} alt={"hand"} 
                        variants={handContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"
                        }
                        />

                    <motion.img className="episode_2_Frame_2_message_1"
                     variants={messageOneContainer}
                     initial="hidden"
                     animate={visible ? "show" : "hidden"}
                        src={message1} alt={"message1"} />

                    <motion.img className="episode_2_Frame_2_message_2"
                    variants={messageTwoContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                        src={message2} alt={"message2"} />
                 <motion.img className="episode_2_Frame_2_shine"
                    animate={ {
                        opacity: [0.5, 0.9, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    } }
                    viewport={{ amount: 0.2 }}
                    src={compShine} alt={"compShine"} />
                   
                </motion.div>
            </div>
        </section>
    )
}
