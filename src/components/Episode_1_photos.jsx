import { useState, useRef } from "react";
import { Footer } from "./episode_1/footer/Fotter";
import { Episode_1_Header } from "./episode_1/header/Episode_1_Header";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { Frame_1_photo } from "./episode_1_photos/frame_1/Frame_1_photo";
import { Frame_2_photo } from "./episode_1_photos/frame_2/Frame_2_photo";
import { Frame_3_photo } from "./episode_1_photos/frame_3/Frame_3_photo";
import { Frame_4_photo } from "./episode_1_photos/frame_4/Frame_4_photo";
import { Frame_5_photo } from "./episode_1_photos/frame_5/Frame_5_photo";
import { Frame_6_photo } from "./episode_1_photos/frame_6/Frame_6_photo";
import { Frame_7_photo } from "./episode_1_photos/frame_7/Frame_7_photo";
import { Frame_8_photo } from "./episode_1_photos/frame_8/Frame_8_photo";
import { Frame_9_photo } from "./episode_1_photos/frame_9/Frame_9_photo";
import { Frame_10_photo } from "./episode_1_photos/frame_10/Frame_10_photo";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  background: black;
  height: 100vh;
`;

export function Episode_1_photos() {
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
        <Item>
          <Episode_1_Header />
        </Item>
        <Item>
          <Frame_1_photo visible={activeIndex === 1} />
        </Item>
        <Item>
          <Frame_2_photo visible={activeIndex === 2} />
        </Item>
        <Item>
          <Frame_3_photo visible={activeIndex === 3} />
        </Item>
        <Item>
          <Frame_4_photo visible={activeIndex === 4} />
        </Item>
        <Item>
          <Frame_5_photo visible={activeIndex === 5} />
        </Item>
        <Item>
          <Frame_6_photo visible={activeIndex === 6} />
        </Item>
        <Item>
          <Frame_7_photo visible={activeIndex === 7} />
        </Item>
        <Item>
          <Frame_8_photo visible={activeIndex === 8} />
        </Item>
        <Item>
          <Frame_9_photo visible={activeIndex === 9} />
        </Item>
        <Item>
          <Frame_10_photo visible={activeIndex === 10} />
        </Item>

        <Item>
          <Footer />
        </Item>
      </Carousel>
    </div>
  );
}
