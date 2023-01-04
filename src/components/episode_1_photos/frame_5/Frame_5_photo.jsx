import girls from "../../../assets/episode_1/frame_5/girls.png";
import hand from "../../../assets/episode_1/frame_5/hand.png";
import eyes from "../../../assets/episode_1/frame_5/eyes.png";
import { motion } from "framer-motion";

export function Frame_5_photo({ visible }) {
  return (
    <section>
      <div className="framerFive">
        <motion.div
          className="framerFiveBlackWindow"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
        >
          <img className="girls" src={girls} alt={"girls"} />
          <motion.img
            initial="hidden"
            whileInView={visible ? "show" : "hidden"}
            className="hand"
            src={hand}
            alt={"hand"}
          />
          <motion.img className="eyes" src={eyes} alt={"eyes"} />
        </motion.div>
      </div>
    </section>
  );
}
