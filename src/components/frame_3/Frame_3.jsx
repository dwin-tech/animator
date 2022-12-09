import { motion } from "framer-motion"
import './index.css';
import  boy from '../../assets/frame_3/boy.png'
import room from '../../assets/frame_3/room.png'
import shine from '../../assets/frame_3/shine.png'
import { container } from '.';





export function Frame_3() {


    return (
        <div className="parent">
            <div className="computerRoom">
                <img className="room"
                    src={room} alt={"room"} />
              <motion.img
                    className="boy"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={boy} alt={"boy"} />
                <motion.div className="shine"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}>
                    <motion.img
                        className="shineImg"
                        // initial={{ opacity: 0.3 }}
                        animate={{
                            opacity:[0.5,0.7,0.5] ,
                            transition:
                            {
                                repeat: "Infinity", duration: 1, ease: "linear",
                            }
                        }}
                        // exit={{ opacity: 1 }}
                        viewport={{ amount: 0.2 }}
                        src={shine} alt={"shine"} />

                </motion.div> 
                {/* <img className="message" src={message} alt={"message"} /> */}
            </div>
        </div>
    )
}
