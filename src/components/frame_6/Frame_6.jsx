import { motion } from "framer-motion"
import one from '../../assets/frame_6/one.png'
import two from '../../assets/frame_6/two.png'
import three from '../../assets/frame_6/three.png'
import four from '../../assets/frame_6/four.png'
import five from '../../assets/frame_6/five.png'
import './index.css';
import { handContainer, fiveContainer } from "."







export function Frame_6() {
    return (
        <div>
            <div className="frameSix">
                <img className="one"
                    src={one} alt={"one"} />
                <motion.img
                    variants={handContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    className="two" src={two} alt={"two"} />

                <motion.img
                    variants={fiveContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    className="five" src={five} alt={"five"} />
            </div>
        </div>
    )
}
