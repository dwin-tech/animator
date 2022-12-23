

import { motion } from "framer-motion"
import window from '../../../assets/episode_2/frame_4/window.png'
import windowShine from '../../../assets/episode_2/frame_4/windowShine.png'
import threePersons from '../../../assets/episode_2/frame_4/threePersons.png'
import compShine from '../../../assets/episode_2/frame_4/compShine.png'
import message from '../../../assets/episode_2/frame_4/message.png'







import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter"
import { blackContainer, messageContainer, windowShineContainer } from "."



export function Episode_2_Frame_4() {

    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_2_Frame_4">
            <motion.div className="episode_2_Frame_4_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                <img className="episode_2_Frame_4_threePersons"
                    src={threePersons} alt={"threePersons"} />
                <img className="episode_2_Frame_4_window"
                    src={window} alt={"window"} />




                <motion.img className="episode_2_Frame_4_windowShine"
                    src={windowShine} alt={"windowShine"}
                    variants={windowShineContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                />

                <motion.img className="episode_2_Frame_4_compShine"
                    animate={visible ? {
                        opacity: [0.5, 0.9, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    viewport={{ amount: 0.2 }}
                    src={compShine} alt={"compShine"} />

                <motion.img className="episode_2_Frame_4_message"
                    src={message} alt={"message"}

                    variants={messageContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}

                />
                </motion.div>
            </div>
        </section>
    )
}
