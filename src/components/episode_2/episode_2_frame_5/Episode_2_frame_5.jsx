import nerd from "../../../assets/episode_2/frame_5/nerd.png";
import curl from "../../../assets/episode_2/frame_5/curl.png";
import blonde from "../../../assets/episode_2/frame_5/blonde.png";
import blackBackground from "../../../assets/episode_2/frame_5/blackBackground.png";

import { usePageCenter } from "../../usePageCenter";
import { blackContainer } from "../../episode_1/blackWindow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { welcomeNerg, welcomeCurl, welcomeBlonde } from ".";

import "./style.css";

export function Episode_2_Frame_5() {
  const animItem = useRef();
  const visible = usePageCenter(animItem);
  return (
    <section
      ref={animItem}
      style={{ marginTop: "15%", scrollSnapAlign: "center" }}
    >
      <motion.div
        className="trio"
        variants={blackContainer}
        initial="hidden"
        whileInView={visible ? "show" : "hidden"}
      >
        <img
          className="blackBackground"
          src={blackBackground}
          alt={"blackBackground"}
        />
        <motion.img
          className="nerd"
          variants={welcomeNerg}
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={nerd}
          alt={"nerd"}
        />
        <motion.img
          className="curl"
          variants={welcomeCurl}
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={curl}
          alt={"curl"}
        />
        <motion.img
          className="blondeGuy"
          variants={welcomeBlonde}
          initial="hidden"
          whileInView={visible ? "show" : "hidden"}
          src={blonde}
          alt={"blonde"}
        />
      </motion.div>
    </section>
  );
}
