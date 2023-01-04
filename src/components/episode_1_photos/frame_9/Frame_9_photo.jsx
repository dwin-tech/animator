import { motion } from "framer-motion";
import "./style.css";
import man from "../../../assets/episode_1/frame_9/man.png";
import manEyes from "../../../assets/episode_1/frame_9/manEyes.png";
import smallShine from "../../../assets/episode_1/frame_9/smallShine.png";

export function Frame_9_photo({ visible }) {
  return (
    <section r style={{ scrollSnapAlign: "center" }}>
      <motion.div
        className="frameNine"
        initial="hidden"
        whileInView={visible ? "show" : "hidden"}
      >
        <img className="man" src={man} alt={"man"} />
        <motion.img className="manEyes" src={manEyes} alt={"manEyes"} />

        <motion.img
          className="smallShine smallShine_photo"
          src={smallShine}
          alt={"smallShine"}
        />
      </motion.div>
    </section>
  );
}
