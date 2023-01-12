import { motion } from "framer-motion";
import { getJsonFrame } from "./fetch";
import { usePageCenter } from "../components/usePageCenter";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { blackContainer } from "./index.js";

export function Frames({ data }) {
  const animItem = useRef();
  const visible = usePageCenter(animItem);

  return (
    <div>
      return(
      <section
        ref={animItem}
        style={{ marginTop: "15%", scrollSnapAlign: "center" }}
      >
        <motion.div
          key={Math.floor(Math.random() * 1000)}
          variants={blackContainer}
          initial={data?.main?.initial}
          whileInView={visible ? "show" : "hidden"}
          style={data?.main?.style}
        >
          {data?.imgs?.map((el, index) => {
            return (
              <motion.img
                key={index}
                variants={el.variants}
                initial={el.initial}
                whileInView={
                  el?.animate ? el?.animate : visible ? "show" : "hidden"
                }
                src={el.src}
                alt={el.alt}
                style={el.style}
              />
            );
          })}
        </motion.div>
      </section>
      )
    </div>
  );
}
