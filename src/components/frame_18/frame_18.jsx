

import { motion } from "framer-motion"
import { messageContent, secondMessageContent, whiteDogContainer, yellowDogContainer } from "."
import doors from '../../assets/frame_18/doors.png'
import horizontal from '../../assets/frame_18/horizontal.png'
import vertical from '../../assets/frame_18/vertical.png'
import whiteDog from '../../assets/frame_18/whiteDog.png'
import yellowDog from '../../assets/frame_18/yellowDog.png'




import './index.css';




export function Frame_18() {
    return (
        <div>
            <div className="framerEighteen">

                <img className="doors"
                    src={doors} alt={"doors"} />

                <motion.img className="whiteDog"
                    variants={whiteDogContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={whiteDog} alt={"whiteDog"} />
                <motion.img className="yellowDog"
                    variants={yellowDogContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={yellowDog} alt={"yellowDog"} />
                <motion.img className="horizontal"

                    variants={messageContent}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={horizontal} alt={"horizontal"} />

                <motion.img className="vertical"
                    variants={secondMessageContent}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={vertical} alt={"vertical"} />


            </div>
        </div>
    )
}
