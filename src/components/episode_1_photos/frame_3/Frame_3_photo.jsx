import { motion } from "framer-motion";
import { useRef } from "react";
import "./style.css";
import boy from "../../../assets/episode_1/frame_3/boy.png";
import room from "../../../assets/episode_1/frame_3/room.png";
import shine from "../../../assets/episode_1/frame_3/shine.png";
import message from "../../../assets/episode_1/frame_3/message.png";

export function Frame_3_photo({ visible }) {
  return (
    <section>
      <div className="frameThree">
        <motion.div
          className="frameThreeBlackWindow"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
        >
          <div className="computerRoom">
            <img className="room" src={room} alt={"room"} />
            <motion.img
              className="boy"
              initial="hidden"
              animate={visible ? "show" : "hidden"}
              src={boy}
              alt={"boy"}
            />
            <motion.div
              className="shine"
              initial="hidden"
              animate={visible ? "show" : "hidden"}
            >
              <motion.img className="shineImg" src={shine} alt={"shine"} />
            </motion.div>
            <motion.img
              initial="hidden"
              whileInView={visible ? "show" : "hidden"}
              className="message, message_photo"
              src={message}
              alt={"message"}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
