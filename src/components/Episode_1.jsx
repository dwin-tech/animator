import { useState, useRef, useCallback } from "react";
import { Footer } from "./episode_1/footer/Fotter";
import { Frame_1 } from "./episode_1/frame_1/Frame_1";
import { Frame_10 } from "./episode_1/Frame_10/Frame_10";
import { Frame_11 } from "./episode_1/frame_11/Frame_11";
import { Frame_12 } from "./episode_1/frame_12/Frame_12";
import { Frame_13 } from "./episode_1/frame_13/Frame_13";
import { Frame_14 } from "./episode_1/frame_14/Frame_14";
import { Frame_15 } from "./episode_1/frame_15/Frame_15";
import { Frame_16 } from "./episode_1/frame_16/Frame_16";
import { Frame_17 } from "./episode_1/frame_17/Frame_17";
import { Frame_18 } from "./episode_1/frame_18/frame_18";
import { Frame_2 } from "./episode_1/frame_2/Frame_2";
import { Frame_3 } from "./episode_1/frame_3/Frame_3";
import { Frame_4 } from "./episode_1/frame_4/Frame_4";
import { Frame_5 } from "./episode_1/frame_5/Frame_5";
import { Frame_6 } from "./episode_1/frame_6/Frame_6";
import { Frame_7 } from "./episode_1/frame_7/Frame_7";
import { Frame_8 } from "./episode_1/frame_8/Frame_8";
import { Frame_9 } from "./episode_1/Frame_9/Frame_9";
import { Episode_1_Header } from "./episode_1/header/Episode_1_Header";
import Carousel, { consts } from 'react-elastic-carousel'
import styled from "styled-components";
import debounce from 'lodash.debounce';



const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
 background: red;
 height:100vh;
`;


export function Episode_1() {

  const [activeIndex, setActiveIndex] = useState(0)
  const goto = (e) => {
    if (e.deltaY < 0) {
      carousel.current.goTo(activeIndex - 1)
    } else {
      carousel.current.goTo(activeIndex + 1)
    }

  }


  const debouncedChangeHandler = debounce(goto, 10)
  const carousel = useRef(null)

  return (
    //   <div onWheel={debouncedChangeHandler}>
    //     <Carousel
    //       ref={carousel}
    //       style={{ magin: 0 }}
    //       // easing="cubic-bezier(1,.15,.55,1.54)"
    //       // tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
    //       transitionMs={1400}
    //       // itemPadding={[20, 0, 0, 0]}
    //       verticalMode
    //       pagination={false}
    //       itemsToShow={1}
    //       showArrows={false}
    //       onChange={(_, pageIndex) => { setActiveIndex(pageIndex) }}
    //       itemPosition={consts.CENTER}
    //       preventDefaultTouchmoveEvent={true}
    //     >
    //       <Item><Episode_1_Header /></Item>
    //       <Item><Frame_1 visible={activeIndex === 1} /></Item>
    //       <Item><Frame_2 visible={activeIndex === 2} /></Item>
    //       <Item><Frame_3 visible={activeIndex === 3} /></Item>
    //       <Item><Frame_4 visible={activeIndex === 4} /></Item>
    //       <Item><Frame_5 visible={activeIndex === 5} /></Item>
    //       <Item><Frame_6 visible={activeIndex === 6} /></Item>
    //       <Item><Frame_7 visible={activeIndex === 7} /></Item>
    //       <Item><Frame_8 visible={activeIndex === 8} /></Item>
    //       <Item><Frame_9 visible={activeIndex === 9} /></Item>
    //       <Item><Frame_10 visible={activeIndex === 10} /></Item>
    //       <Item><Frame_11 visible={activeIndex === 11} /></Item>
    //       <Item><Frame_12 visible={activeIndex === 12} /></Item>
    //       <Item><Frame_13 visible={activeIndex === 13} /></Item>
    //       <Item><Frame_14 visible={activeIndex === 14} /></Item>
    //       <Item><Frame_15 visible={activeIndex === 15} /></Item>
    //       <Item><Frame_16 visible={activeIndex === 16} /></Item>
    //       <Item><Frame_17 visible={activeIndex === 17} /></Item>
    //       <Item><Frame_18 visible={activeIndex === 18} /></Item>
    //       <Item><Footer /></Item>
    //     </Carousel>
    //   </div>
    <section className="container">
      <div className="tiktok">
        {/* <section> */}
        <Episode_1_Header />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>



      <div className="tiktok">
        {/* <section> */}
        <Frame_1 visible={true} />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>

      <div className="tiktok">
        {/* <section> */}
        <Frame_5 visible={true} />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>


      <div className="tiktok">
        {/* <section> */}
        <Frame_2 visible={true} />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>

      <div className="tiktok">
        {/* <section> */}
        <Frame_3 visible={true} />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>
      <div className="tiktok">
        {/* <section> */}
        <Frame_6 visible={true} />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>
      <div className="tiktok">
        {/* <section> */}
        <Footer />
        {/* </section> */}
        {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      </div>
    </section>
    



  );
}