import { motion } from "framer-motion"
import back from '../../../assets/episode_1/frame_7/back.png'
import blonde from '../../../assets/episode_1/frame_7/blonde.png'
import brunet from '../../../assets/episode_1/frame_7/brunet.png'
import phone from '../../../assets/episode_1/frame_7/phone.png'
import finger from '../../../assets/episode_1/frame_7/finger.png'
import shine from '../../../assets/episode_1/frame_7/shine.png'
import blondeEyes from '../../../assets/episode_1/frame_7/blondeEyes.png'
import brunetEyes from '../../../assets/episode_1/frame_7/brunetEyes.png'
import message from '../../../assets/episode_1/frame_7/message.png'




import './index.css';
import { eyesContainer, fingerContainer, messageContainer } from "."
import { BlackWindow } from "../blackWindow/BlackWindows"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import { blackContainer } from "../blackWindow"
import { usePageCenter } from "../../usePageCenter"






export function Frame_7() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)
    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center",position: "relative" }}>

            <motion.div className="frameSeven"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}>

                <img className="back"
                    src={back} alt={"back"} />

                <img className="blonde"
                    src={blonde} alt={"blonde"} />
                <img className="brunet"
                    src={brunet} alt={"brunet"} />
                <img className="phone"
                    src={phone} alt={"phone"} />
                <motion.img
                    variants={fingerContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}

                    className="finger"
                    src={finger} alt={"finger"} />


                <motion.img
                    className="girlsShine"
                    animate={visible ? {
                        opacity: [0.5, 0.9, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    } : { opacity: 1 }}
                    src={shine} alt={"shine"} />
                <img className="blondeEyes"
                    src={blondeEyes} alt={"blondeEyes"} />

                <motion.img className="brunetEyes"

                    variants={eyesContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}

                    src={brunetEyes} alt={"brunetEyes"} />
                <motion.img
                    variants={messageContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}


                    className="girlsMessage"
                    src={message} alt={"message"} />
            </motion.div>
        </section>
    )
}
