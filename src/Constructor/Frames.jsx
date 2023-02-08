import { motion } from "framer-motion";
import { usePageCenter } from "../components/usePageCenter";
import { useRef, useState } from "react";
import { blackContainer } from "./index.js";
import { Footer } from "../components/footer/Fotter";
import { Constructor_Header } from "../Constructor/header/Constructor_Header";
import Carousel, { consts } from "react-elastic-carousel";
import debounce from "lodash.debounce";
import styled from "styled-components";
import "./style.css";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  background: black;
  height: 90vh;
`;

export function Frames({
  frames,
  activeFrame,
  setActiveFrame,
  activeImg,
  setActiveImg,
  setShowStyles,
}) {
  console.log(activeFrame, "==frames", frames);
  const visible = true;

  // const [activeIndex, setActiveIndex] = useState(0);
  const goto = (e) => {
    if (e.deltaY < 0) {
      carousel?.current?.goTo(activeFrame - 1);
    } else {
      carousel?.current?.goTo(activeFrame + 1);
    }
  };

  const debouncedChangeHandler = debounce(goto, 10);
  const carousel = useRef(null);
  return (
    <div className="frame" onWheel={debouncedChangeHandler}>
      {/* <Carousel
        ref={carousel}
        style={{ magin: 0, height: "900px" }}
        // easing="cubic-bezier(1,.15,.55,1.54)"
        // tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={1400}
        // itemPadding={[20, 0, 0, 0]}
        verticalMode
        pagination={false}
        itemsToShow={1}
        showArrows={false}
        onChange={(_, pageIndex) => {
          setActiveFrame(pageIndex);
        }}
        itemPosition={consts.CENTER}
        preventDefaultTouchmoveEvent={true}
      > */}
      {/* <Item>
          <Constructor_Header />
        </Item> */}
      {console.log("activeFrame", activeFrame)}
      {frames.frames?.map((data, i) => {
        data = frames?.frames?.[activeFrame];
        console.log(activeFrame, "+++++++++++++++++", i);
        return (
          <div className="separate" style={{ marginBottom: "100px" }}>
            <motion.div
              key={Math.floor(Math.random() * 1000)}
              variants={blackContainer}
              initial={"show"}
              whileInView={true}
              style={data?.main?.style}
            >
              {data?.imgs?.map((el, index) => {
                return (
                  <motion.img
                    onClick={(_) => {
                      setShowStyles(true);
                      setActiveImg(index);
                    }}
                    key={Math.floor(Math.random() * 10000)}
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
          </div>
        );
      })}

      {/* <Item>
          <Footer />
        </Item> */}
      {/* </Carousel> */}
    </div>
  );
}
