import { motion } from "framer-motion";
import "./style.css";
import one from "../../../assets/episode_1/frame_1/one.png";
import two from "../../../assets/episode_1/frame_1/two.png";
import three from "../../../assets/episode_1/frame_1/three.png";
import birds from "../../../assets/episode_1/frame_1/birds.png";

export function Frame_1_photo({ visible }) {
  return (
    <section>
      <motion.div
        className="frameOne"
        initial="hidden"
        animate={visible ? "show" : "hidden"}
      >
        <motion.img
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="img2, img2_photo"
          src={two}
          alt={"two"}
        />
        <motion.img
          className="img3"
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          src={three}
          alt={"three"}
        />
        <motion.img
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="img"
          src={one}
          alt={"one"}
        />
        <motion.img
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="birds"
          src={birds}
          alt={"birds"}
        />
      </motion.div>
    </section>
  );
}
