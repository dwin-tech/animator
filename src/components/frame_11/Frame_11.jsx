

import { motion } from "framer-motion"
import boy from '../../assets/frame_11/boy.png'
import girl from '../../assets/frame_11/girl.png'
import wall from '../../assets/frame_11/wall.png'
import message from '../../assets/frame_11/message.png'


import './index.css';
import { boyContainer, girlContainer, messageCont } from "."



export function Frame_11() {
    return (
        <div>
            <div className="framerEleven">

                <img className="blueWall"
                    src={wall} alt={"wall"} />


                <motion.img className="boyImg"
                    variants={boyContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={boy} alt={"boy"} />



                <motion.img className="girlImg"
                    variants={girlContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={girl} alt={"girl"} />


                <motion.img className="messageImg"
                    variants={messageCont}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={message} alt={"message"} />
            </div>
        </div>
    )
}
