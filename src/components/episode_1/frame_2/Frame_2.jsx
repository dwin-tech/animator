import { motion } from "framer-motion"
import street from '../../../assets/episode_1/frame_2/street.png'
import blue from '../../../assets/episode_1/frame_2/blue.png'
import yellow from '../../../assets/episode_1/frame_2/yellow.png'
import green from '../../../assets/episode_1/frame_2/green.png'
import './index.css';
import { carBlueCont, carGreenContainer, carYellowContainer } from '.';
import { blackContainer } from "../blackWindow";

export function Frame_2({visible}) {

    return (
        <section >
            <motion.div className="frameTwo"
                variants={blackContainer}
                initial="hidden"
                animate={visible ? "show" : "hidden"}  >
                <img className="street"
                    src={street} alt={"street"} />
                <motion.img className="green"
                    variants={carGreenContainer}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                    src={green} alt={"green"} />
                <motion.div
                    className="yellowCarDiv"
                    variants={carYellowContainer}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                >
                    <motion.img
                        className="yellow"
                        animate={visible ? {
                            opacity: 0,
                            transition:
                            {
                                delay: 0.5,
                                duration: 1, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={yellow} alt={"yellow"} />
                </motion.div>

                 <motion.div
                    className="blueCarDiv"
                    variants={carBlueCont}
                    initial="hidden"
                    exit="exit"
                    animate={visible ? "show" : "hidden"}
                >
                    <motion.img
                        className="blue"
                        animate={visible ? {
                            opacity: 0.2,
                            transition:
                            {
                                delay: 0.1,
                                duration: 1.7, ease: "linear",
                            }
                        } : { opacity: 1 }}
                        src={blue} alt={"blue"} />
                </motion.div> 

            </motion.div>
        </section>
    )
}
