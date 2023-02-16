import { useState, useRef, useEffect } from "react";

import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { Frame } from "./Frame";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  background: black;
  height: 100vh;
`;

export function Preview() {
  const data = JSON.parse(localStorage.getItem("frames"));

  const [activeIndex, setActiveIndex] = useState(0);
  const goto = (e) => {
    if (e.deltaY < 0) {
      carousel.current.goTo(activeIndex - 1);
    } else {
      carousel.current.goTo(activeIndex + 1);
    }
  };

  const debouncedChangeHandler = debounce(goto, 10);
  const carousel = useRef(null);

  return (
    <div onWheel={debouncedChangeHandler}>
      {data.frames && (
        <Carousel
          ref={carousel}
          style={{ magin: 0 }}
          transitionMs={1400}
          verticalMode
          pagination={false}
          itemsToShow={1}
          showArrows={false}
          onChange={(_, pageIndex) => {
            setActiveIndex(pageIndex);
          }}
          itemPosition={consts.CENTER}
          preventDefaultTouchmoveEvent={true}
        >
          {data?.frames.map((frame, index) => {
            return (
              <Item>
                <Frame
                  visible={activeIndex == index}
                  data={frame}
                  activeFrame={index}
                />
              </Item>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
