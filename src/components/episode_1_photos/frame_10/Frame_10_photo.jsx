import { motion } from "framer-motion";
import personTwo from "../../../assets/episode_1/frame_10/personTwo.png";
import wall from "../../../assets/episode_1/frame_10/wall.png";
import personOne from "../../../assets/episode_1/frame_10/personOne.png";
import twoPersonsMessage from "../../../assets/episode_1/frame_10/twoPersonsMessage.png";
import twoPersonsShine from "../../../assets/episode_1/frame_10/twoPersonsShine.png";
import "./style.css";

export function Frame_10_photo({ visible }) {
  return (
    <section style={{ scrollSnapAlign: "center" }}>
      <motion.div
        className="framerTen"
        initial="hidden"
        whileInView={visible ? "show" : "hidden"}
      >
        <img className="wall" src={wall} alt={"wall"} />
        <img className="personOne" src={personOne} alt={"personOne"} />
        <motion.img
          className="personTwo"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          viewport={{ amount: 0.2 }}
          src={personTwo}
          alt={"personTwo"}
        />

        <motion.img
          className="twoPersonsShine twoPersonsShine_photo"
          src={twoPersonsShine}
          alt={"twoPersonsShine"}
        />

        <motion.img
          className="twoPersonsMessage twoPersonsMessage_photo"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={twoPersonsMessage}
          alt={"twoPersonsMessage"}
        />
      </motion.div>
    </section>
  );
}
