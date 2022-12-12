import { motion } from "framer-motion"


import './index.css';

import { useWindowWidth } from "@react-hook/window-size";
import { blackContainer } from ".";




export function BlackWindow() {
 
    return (
        <motion.div className="xxx"
            variants={blackContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
        >
        </motion.div>
    )
}
