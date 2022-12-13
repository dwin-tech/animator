

import { motion } from "framer-motion"
import boy from '../../assets/frame_14/boy.png'
import shine from '../../assets/frame_14/shine.png'
import message from '../../assets/frame_14/message.png'
import brows from '../../assets/frame_14/brows.png'



import './index.css';
import { browsContainer ,messageContent} from "."




export function Frame_14() {
    return (
        <div>
            <div className="framerTwelve">

                <img className="phoneBoy"
                    src={boy} alt={"boy"} />
                <motion.img className="phoneBoyShine"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}

                    src={shine} alt={"shine"} />
                <motion.img className="phoneBoyMessage"

                    variants={messageContent}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={message} alt={"message"} />
                <motion.img className="brows"
                variants={browsContainer}
                initial="hidden"
                // animate="show"
                whileInView="show"
                    src={brows} alt={"brows"} />

            </div>
        </div>
    )
}
