import { motion } from "framer-motion";
import one from "../../../assets/episode_1/frame_6/one.png";
import two from "../../../assets/episode_1/frame_6/two.png";
import three from "../../../assets/episode_1/frame_6/three.png";
import four from "../../../assets/episode_1/frame_6/four.png";
import five from "../../../assets/episode_1/frame_6/five.png";
import "./style.css";

export function Frame_6_photo({ visible }) {
  return (
    <section style={{ scrollSnapAlign: "center" }}>
      <div className="frameSix">
        <motion.div
          className="xxxx"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
        >
          <img className="one" src={one} alt={"one"} />
          <motion.img
            initial="hidden"
            whileInView={visible ? "show" : "hidden"}
            className="two"
            src={two}
            alt={"two"}
          />
          <motion.img className="three" src={four} alt={"four"} />
          <motion.img className="five, five_photo" src={five} alt={"five"} />
        </motion.div>
      </div>
    </section>
  );
}
