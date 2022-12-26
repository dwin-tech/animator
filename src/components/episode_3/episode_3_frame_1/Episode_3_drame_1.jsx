import { motion } from "framer-motion";
import back from "../../../assets/episode_3/frame_1/back.png";
import threePersons from "../../../assets/episode_3/frame_1/threePersons.png";
import boy from "../../../assets/episode_3/frame_1/boy.png";
import girl from "../../../assets/episode_3/frame_1/girl.png";
import hand1 from "../../../assets/episode_3/frame_1/hand1.png";
import hand2 from "../../../assets/episode_3/frame_1/hand2.png";
import message1 from "../../../assets/episode_3/frame_1/message1.png";
import message2 from "../../../assets/episode_3/frame_1/message2.png";

import "./style.css";

import { useRef } from "react";
import { usePageCenter } from "../../usePageCenter";
import { blackContainer, messageOneContainer, messageTwoContainer } from ".";

export function Episode_3_Frame_1() {
    const animItem = useRef();
    const visible = usePageCenter(animItem);

    return (
        <section ref={animItem} style={{ marginTop: "15%", scrollSnapAlign: "center" }}>
            <div className="episode_3_Frame_1">
                <motion.div
                    className="episode_3_Frame_1_BlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                >
                    <img className="episode_3_Frame_1_back" src={back} alt={"back"} />
                    <img
                        className="episode_3_Frame_1_threePersons"
                        src={threePersons}
                        alt={"threePersons"}
                    />
                    <img className="episode_3_Frame_1_boy" src={boy} alt={"boys"} />
                    <img className="episode_3_Frame_1_girl" src={girl} alt={"girl"} />
                    <img className="episode_3_Frame_1_hand1" src={hand1} alt={"hand1"} />
                    <img className="episode_3_Frame_1_hand2" src={hand2} alt={"hand2"} />

                    <motion.img
                        className="episode_3_Frame_1_message"
                        src={message1}
                        alt={"message1"}
                        variants={messageOneContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                    />
                    <motion.img
                        className="episode_3_Frame_1_message"
                        src={message2}
                        alt={"message2"}
                        variants={messageTwoContainer}
                        initial="hidden"
                        animate={visible ? "show" : "hidden"}
                    />
                </motion.div>
            </div>
        </section>
    );
}
