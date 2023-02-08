import { motion } from "framer-motion";
import { blackContainer } from "./index.js";

export function Frame({ data }) {
  const visible = true;

  // console.log("data -> ", data);
  return (
    <div>
      <motion.div
        variants={blackContainer}
        initial={"show"}
        whileInView={true}
        style={data?.main?.style}
      >
        {data?.imgs?.map((el, index) => {
          // el.style.maxWidth = maxWidth;
          // console.log("el.variants", el.variants);
          return (
            <motion.img
              onClick={(_) => {
                // setShowStyles(true);
                // setActiveImg(index);
              }}
              key={el.src}
              variants={el.variants}
              initial={el.initial}
              // whileInView={
              //   el?.animate ? el?.animate : visible ? "show" : "hidden"
              // }
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
