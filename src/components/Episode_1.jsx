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
import { Episode_2_Frame_1 } from "./episode_2/episod_2_frame_1/episod_2_frame_1";

export function Episode_1() {

    return (
        <div>
            <article className="App" id="App" style={{
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollSnapType: "mandatory",
                scrollSnapType: "y mandatory", backgroundColor: "black",
                scrollPadding: "10px",
                scrollBehavior: "smooth",
                position: "relative",
                scrollSnapStop: "always"
            }}>
                <Episode_1_Header />
                <Frame_1 />
                <Frame_2 />
                <Frame_3 />
                <Frame_4 />
                <Frame_5 />
                <Frame_6 />
                <Frame_7 />
                <Frame_8 />
                <Frame_9 />
                <Frame_10 />
                <Frame_11 />
                <Frame_12 />
                <Frame_13 />
                <Frame_14 />
                <Frame_15 />
                <Frame_16 />
                <Frame_17 />
                <Frame_18 />
                {/* <Episode_2_Frame_1 /> */}
                <Footer />
            </article>
        </div>
    );
}