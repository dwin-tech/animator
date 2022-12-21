

import { motion } from "framer-motion"
import room from '../../../assets/episode_2/frame_1/room.png'
import threePeople from '../../../assets/episode_2/frame_1/threePeople.png'
import window from '../../../assets/episode_2/frame_1/window.png'
import shine from '../../../assets/episode_2/frame_1/shine.png'
import onePerson from '../../../assets/episode_2/frame_1/onePerson.png'


import './style.css';

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, boyWithComputerContainer } from "."


export function Episode_2_Frame_1() {
   

    
    return (
        <section  style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_2_Frame_1">
            <motion.div className="episode_2_Frame_1_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView="show"
                     >
                <img className="episode_2_Frame_1_threePeople"
                    src={threePeople} alt={"threePeople"} />
                <img className="episode_2_Frame_1_room"
                    src={room} alt={"room"} />
                <img className="episode_2_Frame_1_window"
                    src={window} alt={"window"} />
                <motion.img className="episode_2_Frame_1_shine"
                    animate={ {
                        opacity: [0.5, 0.7, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    } }
                    viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />
                <motion.img className="episode_2_Frame_1_onePerson"
                    variants={boyWithComputerContainer}
                    initial="hidden"
                    whileInView= "show" 
                    src={onePerson} alt={"onePerson"} />
                    </motion.div>
            </div>
        </section>
    )
}
