import { motion } from "framer-motion"
import back from '../../assets/frame_7/back.png'
import blonde from '../../assets/frame_7/blonde.png'
import brunet from '../../assets/frame_7/brunet.png'
import phone from '../../assets/frame_7/phone.png'
import finger from '../../assets/frame_7/finger.png'
import shine from '../../assets/frame_7/shine.png'
import blondeEyes from '../../assets/frame_7/blondeEyes.png'
import brunetEyes from '../../assets/frame_7/brunetEyes.png'
import message from '../../assets/frame_7/message.png'




import './index.css';
import { eyesContainer, fingerContainer, messageContainer } from "."
import { BlackWindow } from "../blackWindow/BlackWindows"







export function Frame_7() {
    return (
        <div>
            <div className="frameSeven">
            {/* <BlackWindow/> */}

                <img className="back"
                    src={back} alt={"back"} />

                <img className="blonde"
                    src={blonde} alt={"blonde"} />
                <img className="brunet"
                    src={brunet} alt={"brunet"} />
                <img className="phone"
                    src={phone} alt={"phone"} />
                <motion.img
                    variants={fingerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    className="finger"
                    src={finger} alt={"finger"} />

                {/* <img className="shine"
                    src={shine} alt={"shine"} /> */}

                <motion.img
                    className="girlsShine"
                    animate={{
                        opacity: [0.5, 0.9, 0.5],
                        transition:
                        {
                            repeat: "Infinity", duration: 0.8, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}
                    src={shine} alt={"shine"} />
                <img className="blondeEyes"
                    src={blondeEyes} alt={"blondeEyes"} />

                <motion.img className="brunetEyes"

                    variants={eyesContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={brunetEyes} alt={"brunetEyes"} />
                <motion.img 
                 variants={messageContainer}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ amount: 0.2 }}
                
                className="girlsMessage"
                    src={message} alt={"message"} />
            </div>
        </div>
    )
}
