import bigRoom from '../../assets/frame_4/bigRoom.png'
import runing from '../../assets/frame_4/runing.png'
import lists from '../../assets/frame_4/lists.png'
import mess from '../../assets/frame_4/mess.png'
import { motion } from "framer-motion"
import { useWindowWidth } from "@react-hook/window-size"


import './index.css';
import { containero,listsContainer } from '.'


export function Frame_4() {

    const width = useWindowWidth();
    console.log('====================================');
    console.log(width);
    console.log('====================================');
    return (
        <div className="parent">
            <div className="corridor">
                <img className="room"
                    src={bigRoom} alt={"bigRoom"} />
                <motion.img
                    className="runningGuy"
                    variants={containero}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={runing} alt={"runing"} />
                <motion.img

                    variants={listsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}

                    className="lists" src={lists} alt={"lists"} />
                {/*<img className="mess" src={mess} alt={"mess"} /> */}

            </div>
        </div>
    )
}
