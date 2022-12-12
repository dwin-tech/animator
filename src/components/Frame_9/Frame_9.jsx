import { motion } from "framer-motion"
import './index.css';


import man from '../../assets/frame_9/man.png'
import manEyes from '../../assets/frame_9/manEyes.png'
import smallShine from '../../assets/frame_9/smallShine.png'









export function Frame_9() {
    return (
        <div>
            <div className="frameNine">
                <img className="man"
                    src={man} alt={"man"} />
                <motion.img className="manEyes"
                animate={{
                    opacity: [0.6, 0.8, 0.6],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                }}
                viewport={{ amount: 0.2 }}
                    src={manEyes} alt={"manEyes"} />

                <motion.img className="smallShine"
                 animate={{
                    opacity: [0.5, 0.7, 0.5],
                    transition:
                    {
                        repeat: "Infinity", duration: 1, ease: "linear",
                    }
                }}
                viewport={{ amount: 0.2 }}
                    src={smallShine} alt={"smallShine"} />
            </div>
        </div>
    )
}
