import bigRoom from '../../assets/frame_4/bigRoom.png'
import runing from '../../assets/frame_4/runing.png'
import lists from '../../assets/frame_4/lists.png'
import mess from '../../assets/frame_4/mess.png'
import { motion } from "framer-motion"
import { useWindowWidth } from "@react-hook/window-size"


import './index.css';
import { container, listsContainer, messContainer } from '.'


export function Frame_4() {
    return (
        <div >
            <div className="frameFour">
                <img className="room"
                    src={bigRoom} alt={"bigRoom"} />
                <motion.img
                    className="runningGuy"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={runing} alt={"runing"}

                />
                <motion.img

                    variants={listsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}

                    className="lists" src={lists} alt={"lists"} />
                <motion.img
                
                variants={messContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                
                
                className="mess" src={mess} alt={"mess"} />

            </div>
        </div>
    )
}
