import { motion } from "framer-motion"


import './index.css';
import {  boxOne, threeBox, twoBox, birdsContainer} from ".";

import one from '../../assets/frame_1/one.png'
import two from '../../assets/frame_1/two.png'
import three from '../../assets/frame_1/three.png'
import birds from '../../assets/frame_1/birds.png'
import { useWindowWidth } from "@react-hook/window-size";




export function Frame_1() {
    return (
        <div >
            <div className="frameOne"  >

                <motion.img variants={twoBox}
                    initial="hidden"
                    // animate="show"
                    whileInView="show" className="img2" src={two} alt={"two"}
                    viewport={{ amount: 0.2 }} />


                <motion.img className="img3" variants={threeBox}
                    initial="hidden"
                    // animate="show"
                    whileInView="show" src={three} alt={"three"}
                    viewport={{ amount: 0.2 }} />
                <motion.img variants={boxOne}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    className="img"
                    viewport={{ amount: 0.2 }}
                    src={one} alt={"one"} />
                    <motion.img variants={birdsContainer}
                    initial="birds"
                    // animate="show"
                    whileInView="show" 
                    className="birds" src={birds} alt={"birds"}
                    viewport={{ amount: 0.2 }}
                     />

                {/* <img   className="img" src={one} alt={"one"}/> */}
            </div>
        </div>
    )
}
