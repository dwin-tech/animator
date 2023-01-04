import { motion } from "framer-motion";
import back from "../../../assets/episode_1/frame_7/back.png";
import blonde from "../../../assets/episode_1/frame_7/blonde.png";
import brunet from "../../../assets/episode_1/frame_7/brunet.png";
import phone from "../../../assets/episode_1/frame_7/phone.png";
import finger from "../../../assets/episode_1/frame_7/finger.png";
import shine from "../../../assets/episode_1/frame_7/shine.png";
import blondeEyes from "../../../assets/episode_1/frame_7/blondeEyes.png";
import brunetEyes from "../../../assets/episode_1/frame_7/brunetEyes.png";
import message from "../../../assets/episode_1/frame_7/message.png";
import "./style.css";

export function Frame_7_photo({ visible }) {
  return (
    <section style={{ scrollSnapAlign: "center", position: "relative" }}>
      <motion.div
        className="frameSeven"
        initial="hidden"
        whileInView={visible ? "show" : "hidden"}
      >
        <img className="back" src={back} alt={"back"} />
        <img className="blonde" src={blonde} alt={"blonde"} />
        <img className="brunet" src={brunet} alt={"brunet"} />
        <img className="phone" src={phone} alt={"phone"} />
        <motion.img
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          className="finger"
          src={finger}
          alt={"finger"}
        />
        <motion.img className="girlsShine" src={shine} alt={"shine"} />
        <img className="blondeEyes" src={blondeEyes} alt={"blondeEyes"} />

        <motion.img
          className="brunetEyes, brunetEyes_photo"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={brunetEyes}
          alt={"brunetEyes"}
        />
        <motion.img
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          className="girlsMessage, girlsMessage_photo"
          src={message}
          alt={"message"}
        />
      </motion.div>
    </section>
  );
}
