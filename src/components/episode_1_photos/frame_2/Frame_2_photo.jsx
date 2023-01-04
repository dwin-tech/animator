import { motion } from "framer-motion";
import street from "../../../assets/episode_1/frame_2/street.png";
import blue from "../../../assets/episode_1/frame_2/blue.png";
import yellow from "../../../assets/episode_1/frame_2/yellow.png";
import green from "../../../assets/episode_1/frame_2/green.png";

export function Frame_2_photo({ visible }) {
  return (
    <section>
      <motion.div
        className="frameTwo"
        initial="hidden"
        animate={visible ? "show" : "hidden"}
      >
        <img className="street" src={street} alt={"street"} />
        <motion.img
          className="green"
          initial="hidden"
          exit="exit"
          animate={visible ? "show" : "hidden"}
          src={green}
          alt={"green"}
        />
        <motion.div
          className="yellowCarDiv"
          initial="hidden"
          exit="exit"
          animate={visible ? "show" : "hidden"}
        >
          <motion.img className="yellow" src={yellow} alt={"yellow"} />
        </motion.div>

        <motion.div
          className="blueCarDiv"
          initial="hidden"
          exit="exit"
          animate={visible ? "show" : "hidden"}
        >
          <motion.img className="blue" src={blue} alt={"blue"} />
        </motion.div>
      </motion.div>
    </section>
  );
}
