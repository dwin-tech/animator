import { motion } from "framer-motion";
import './index.css';
import { boxOne, threeBox, twoBox, birdsContainer } from ".";
import one from '../../../assets/episode_1/frame_1/one.png'
import two from '../../../assets/episode_1/frame_1/two.png'
import three from '../../../assets/episode_1/frame_1/three.png'
import birds from '../../../assets/episode_1/frame_1/birds.png'
import { blackContainer } from "../blackWindow";

export function Frame_1({ visible }) {

    return (
        <section>
            <motion.div className="frameOne"
                variants={blackContainer}
                initial="hidden"
                animate={visible ? "show" : "hidden"}
            >
                <motion.img variants={twoBox}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                    className="img2" src={two} alt={"two"}
                />
                <motion.img className="img3" variants={threeBox}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                    src={three} alt={"three"}
                />
                <motion.img variants={boxOne}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                    className="img"

                    src={one} alt={"one"} />
                <motion.img variants={birdsContainer}
                    initial="hidden"
                    animate={visible ? "show" : "hidden"}
                    className="birds" src={birds} alt={"birds"}
                />
            </motion.div>
        </section>
    )
}
