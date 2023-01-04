import { motion } from "framer-motion";
import "./style.css";
import employee from "../../../assets/episode_1/frame_8/employee.png";
import window from "../../../assets/episode_1/frame_8/window.png";
import computerShine from "../../../assets/episode_1/frame_8/computerShine.png";
import time from "../../../assets/episode_1/frame_8/time.png";
import twoPerson from "../../../assets/episode_1/frame_8/twoPerson.png";

export function Frame_8_photo({ visible }) {
  return (
    <section style={{ scrollSnapAlign: "center" }}>
      <motion.div
        className="frameEight"
        initial="hidden"
        whileInView={visible ? "show" : "hidden"}
      >
        <img className="employee" src={employee} alt={"employee"} />
        <img className="window" src={window} alt={"window"} />
        <motion.img
          className="computerShine computerShine_photo"
          viewport={{ amount: 0.2 }}
          src={computerShine}
          alt={"computerShine"}
        />
        <motion.img
          className="twoPerson twoPerson_photo"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={twoPerson}
          alt={"twoPerson"}
        />
        <img className="time" src={time} alt={"twoPetimerson"} />
      </motion.div>
    </section>
  );
}
