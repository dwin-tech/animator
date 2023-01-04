import { motion } from "framer-motion";
import bigRoom from "../../../assets/episode_1/frame_4/bigRoom.png";
import runing from "../../../assets/episode_1/frame_4/runing.png";
import lists from "../../../assets/episode_1/frame_4/lists.png";
import mess from "../../../assets/episode_1/frame_4/mess.png";
import "./style.css";

export function Frame_4_photo({ visible }) {
  return (
    <section>
      <div className="frameFour">
        <motion.div
          className="frameFourBlackWindow"
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
        >
          <img className="room" src={bigRoom} alt={"bigRoom"} />
          <motion.img
            className="runningGuy_photo runningGuy "
            initial="hidden"
            src={runing}
            alt={"runing"}
          />
          <motion.img
            initial="hidden"
            whileInView={visible ? "show" : "hidden"}
            className="lists"
            src={lists}
            alt={"lists"}
          />
          <motion.img
            initial="hidden"
            whileInView={visible ? "show" : "hidden"}
            className="mess_photo mess"
            src={mess}
            alt={"mess"}
          />
        </motion.div>
      </div>
    </section>
  );
}
