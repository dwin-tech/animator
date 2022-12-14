import { motion } from "framer-motion"
import { messageContent, secondMessageContent, whiteDogContainer, yellowDogContainer } from "."
import doors from '../../../assets/episode_1/frame_18/doors.png'
import horizontal from '../../../assets/episode_1/frame_18/horizontal.png'
import vertical from '../../../assets/episode_1/frame_18/vertical.png'
import whiteDog from '../../../assets/episode_1/frame_18/whiteDog.png'
import yellowDog from '../../../assets/episode_1/frame_18/yellowDog.png'
import { blackContainer } from "../blackWindow"
import './index.css';

export function Frame_18({ visible }) {
    return (
        <section style={{ scrollSnapAlign: "center" }}>
            <motion.div className="framerEighteen"
                variants={blackContainer}
                initial="hidden"
                whileInView={visible ? "show" : "hidden"}   >

                <img className="doors"
                    src={doors} alt={"doors"} />

                <motion.img className="whiteDog"
                    variants={whiteDogContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={whiteDog} alt={"whiteDog"} />
                <motion.img className="yellowDog"
                    variants={yellowDogContainer}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={yellowDog} alt={"yellowDog"} />
                <motion.img className="horizontal"

                    variants={messageContent}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={horizontal} alt={"horizontal"} />

                <motion.img className="vertical"
                    variants={secondMessageContent}
                    initial="hidden"
                    whileInView={visible ? "show" : "hidden"}
                    src={vertical} alt={"vertical"} />
            </motion.div>
        </section>
    )
}
