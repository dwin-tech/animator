import { motion } from "framer-motion";

import "./header.css";

const sentence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const line = "Welcome To CONSTRUCTO";

const letter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    Y: 0,
  },
};

const scrollIConContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 1,
      ease: "linear",
    },
  },
};

export function Constructor_Header() {
  return (
    <section
      className="header"
      style={{ marginTop: "5%", scrollSnapAlign: "center" }}
    >
      <div className="headerDiv">
        <motion.h1
          className="titleOne"
          style={{ color: "white" }}
          variants={sentence}
          initial="hidden"
          whileInView="visible"
        >
          {line.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* <motion.img
                    className="scrollIcon"
                    variants={scrollIConContainer}
                    initial="hidden"
                    whileInView="visible"

                    src={scrollIcon} alt={"scrollIcon"}
                /> */}
        <motion.div
          class="wrapper"
          variants={scrollIConContainer}
          initial="hidden"
          whileInView="visible"
        >
          <div class="scroll">
            <span>Scroll</span>
            <div class="mouse-icon">
              <div class="mouse-icon_wheel"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
