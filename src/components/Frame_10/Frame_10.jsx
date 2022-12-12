

import { motion } from "framer-motion"
import personTwo from '../../assets/frame_10/personTwo.png'
import wall from '../../assets/frame_10/wall.png'
import personOne from '../../assets/frame_10/personOne.png'
import twoPersonsMessage from '../../assets/frame_10/twoPersonsMessage.png'
import twoPersonsShine from '../../assets/frame_10/twoPersonsShine.png'

import './index.css';
import { messageCont, personTwoContainer } from "."



export function Frame_10() {
    return (
        <div>
            <div className="framerTen">
                <img className="wall"
                    src={wall} alt={"wall"} />
                <img className="personOne"
                    src={personOne} alt={"personOne"} />
                <motion.img className="personTwo"
                    variants={personTwoContainer}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}

                    src={personTwo} alt={"personTwo"} />
                <motion.img className="twoPersonsShine"
                    animate={{
                        opacity: [0.6, 0.9, 0.6],
                        transition:
                        {
                            repeat: "Infinity", duration: 1, ease: "linear",
                        }
                    }}
                    viewport={{ amount: 0.2 }}
                    src={twoPersonsShine} alt={"twoPersonsShine"} />


                <motion.img className="twoPersonsMessage"
                    variants={messageCont}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    src={twoPersonsMessage} alt={"twoPersonsMessage"} />

            </div>
        </div>
    )
}
