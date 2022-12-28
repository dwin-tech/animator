

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_2/back.png'
import eyes from '../../../assets/episode_3/frame_2/eyes.png'
import eyes1 from '../../../assets/episode_3/frame_2/eyes1.png'
import eyes2 from '../../../assets/episode_3/frame_2/eyes2.png'
import message from '../../../assets/episode_3/frame_2/message.png'
import mouth from '../../../assets/episode_3/frame_2/mouth.png'
import finger from '../../../assets/episode_3/frame_2/finger.png'








import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, handContainer, messageContainer } from "."


export function Episode_3_Frame_2() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_2">
                <motion.div className="episode_3_Frame_2_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_2_back"
                        src={back} alt={"back"} />
                    <motion.img className="episode_3_Frame_2_finger"
                        src={finger} alt={"finger"}
                        variants={handContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"} />
                    <img className="episode_3_Frame_1_mouth"
                        src={mouth} alt={"mouth"} />
                    <motion.img className="episode_3_Frame_2_message"
                        src={message} alt={"message"}
                        variants={messageContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"} />
                     {/* <img className="episode_3_Frame_1_eyes"
                        src={eyes} alt={"eyes"} /> */}
                   {/* <img className="episode_3_Frame_1_hand1"
                        src={hand1} alt={"hand1"} />
                    <img className="episode_3_Frame_1_hand2"
                        src={hand2} alt={"hand2"} />
                
                     */}



                </motion.div>
            </div>
        </section>
    )
}
