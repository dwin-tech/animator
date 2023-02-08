import { motion } from "framer-motion";
import { blackContainer } from "./index.js";

export function Frame({ data }) {
  const visible = true;

  return (
    <div>
      <motion.div
        variants={blackContainer}
        initial={"show"}
        whileInView={true}
        style={data?.main?.style}
      >
        {data?.imgs?.map((el, index) => {
          return (
            <motion.img
              key={el.src}
              variants={el.variants}
              initial={el.initial}
              whileInView={visible ? "show" : "hidden"}
              src={el.src}
              alt={el.alt}
              style={el.style}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
