import { motion } from "framer-motion"
import bigRoom from '../../../assets/episode_1/frame_4/bigRoom.png'
import runing from '../../../assets/episode_1/frame_4/runing.png'
import lists from '../../../assets/episode_1/frame_4/lists.png'
import mess from '../../../assets/episode_1/frame_4/mess.png'
import './index.css';
import { container, listsContainer, messContainer } from '.'
import { blackContainer } from "../blackWindow";

export function Frame_4({ visible }) {
    return (
        <section >
            <div className="frameFour">
                <motion.div className="frameFourBlackWindow"
                    variants={blackContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}>
                    <img className="room"
                        src={bigRoom} alt={"bigRoom"} />
                    <motion.img
                        className="runningGuy"
                        variants={container}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        src={runing} alt={"runing"}
                    />
                    <motion.img
                        variants={listsContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="lists" src={lists} alt={"lists"} />
                    <motion.img
                        variants={messContainer}
                        initial="hidden"
                        whileInView={visible ? "show" : "hidden"}
                        className="mess" src={mess} alt={"mess"} />

                </motion.div>
            </div>
        </section>
    )
}
