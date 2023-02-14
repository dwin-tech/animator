import { motion } from "framer-motion";
import { blackContainer } from "./index.js";

export function Frame({ data, activeFrame }) {
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
          const style = document.createElement("style");
          style.innerHTML = el.style.customStyles;
          document.head.appendChild(style);
          let className = `frame_${activeFrame}_img_${index}`;
          return (
            <motion.img
              className={className}
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
