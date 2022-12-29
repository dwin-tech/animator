import { motion } from "framer-motion"
import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";


import bigRoom from '../../../assets/episode_1/frame_4/bigRoom.png'
import runing from '../../../assets/episode_1/frame_4/runing.png'
import lists from '../../../assets/episode_1/frame_4/lists.png'
import mess from '../../../assets/episode_1/frame_4/mess.png'


import './index.css';
import { container, listsContainer, messContainer } from '.'
import { BlackWindow } from '../blackWindow/BlackWindows'
import { usePageCenter } from "../../usePageCenter";
import { blackContainer } from "../blackWindow";


export function Frame_4() {
    const animItem = useRef();
    const visible = usePageCenter(animItem)

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="frameFour">

                <motion.div className="frameFourBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>

                    <img className="room"
                        src={bigRoom} alt={"bigRoom"} />
                    <motion.img
                        className="runningGuy"
                        variants={container}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={runing} alt={"runing"}

                    />
                    <motion.img

                        variants={listsContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="lists" src={lists} alt={"lists"} />
                    <motion.img

                        variants={messContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}


                        className="mess" src={mess} alt={"mess"} />

                </motion.div>
            </div>
        </section>
    )
}
