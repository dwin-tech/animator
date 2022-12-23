

import { motion } from "framer-motion"
import back from '../../../assets/episode_3/frame_6/back.png'
import mouth from '../../../assets/episode_3/frame_6/mouth.png'
import eyes from '../../../assets/episode_3/frame_6/eyes.png'

import message from '../../../assets/episode_3/frame_6/message.png'









import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, messageContainer } from "."


export function Episode_3_Frame_6() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_6">
                <motion.div className="episode_3_Frame_6_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_6_back"
                        src={back} alt={"back"} />
                  
                    <img className="episode_3_Frame_6_message"
                        src={message} alt={"message"} /> 


                    <img className="episode_3_Frame_6_eyes"
                        src={eyes} alt={"eyes"} /> 

<img className="episode_3_Frame_6_mouth"
                        src={mouth} alt={"mouth"} /> 
              
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
