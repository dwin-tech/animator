

import { motion } from "framer-motion"
import { carContainer,  nightContainer, onLight, starShow } from "."
import back from '../../assets/frame_17/back.png'
import carLight from '../../assets/frame_17/carLight.png'
import stars from '../../assets/frame_17/stars.png'
import street from '../../assets/frame_17/street.png'
import streetWindows from '../../assets/frame_17/streetWindows.png'



import './index.css';




export function Frame_17() {
    return (
        <div>
            <div className="framerSeventeen">
                <div className="nightBackground">

                    <img className="streetTwo"
                        src={street} alt={"street"} />
                    <motion.img className="stars"

                        variants={starShow}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"

                        src={stars} alt={"stars"} />
                    <motion.img className="backTwo"
                        variants={nightContainer}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={back} alt={"back"} />
                    <motion.img className="streetWindows"
                        variants={onLight}
                        initial="hidden"
                        // animate="show"
                        whileInView="show"
                        src={streetWindows} alt={"streetWindows"} />
                    <motion.img className="carLight"
                    variants={carContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                        src={carLight} alt={"carLight"} />
                </div>




            </div>
        </div>
    )
}
