import { motion } from "framer-motion"


import street from '../../assets/frame_2/street.png'
import blue from '../../assets/frame_2/blue.png'
import yellow from '../../assets/frame_2/yellow.png'
import green from '../../assets/frame_2/green.png'
import './index.css';
import { carBlueContainer, carGreenContainer, carYellowContainer } from '.';




export function Frame_2() {
    return (
        <div>
            <div className="parent">
                <img className="street"
                    src={street} alt={"street"} />
                <motion.img className="green"
                    variants={carGreenContainer}
                    initial="hidden"
                    whileInView="show" 
                    viewport={{ amount: 0.2 }}
                     src={green} alt={"green"} />
                <motion.img className="yellow"
                    variants={carYellowContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={yellow} alt={"yellow"} />
                <motion.img className="blue"
                    variants={carBlueContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.2 }}
                    src={blue} alt={"blue"} />
            </div>
        </div>
    )
}
