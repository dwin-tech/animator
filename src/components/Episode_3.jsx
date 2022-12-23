import { Footer } from "./episode_1/footer/Fotter";
import { Episode_3_Frame_1 } from "./episode_3/episode_3_frame_1/Episode_3_drame_1";
import { Episode_3_Frame_2 } from "./episode_3/episode_3_frame_2/Episode_3_drame_2";
import { Episode_3_Frame_3 } from "./episode_3/episode_3_frame_3/Episode_3_drame_3";
import { Episode_3_Frame_4 } from "./episode_3/episode_3_frame_4/Episode_3_drame_4";
import { Episode_3_Frame_5 } from "./episode_3/episode_3_frame_5/Episode_3_drame_5";
import { Episode_3_Frame_6 } from "./episode_3/episode_3_frame_6/Episode_3_drame_6";
import { Episode_3_Frame_7 } from "./episode_3/episode_3_frame_7/Episode_3_drame_7";

import { Episode_3_Header } from "./episode_3/header/Episode_3_Header";

export function Episode_3() {

    return (
        <div>
            <article className="episode" id="episode_3" style={{
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
                <Episode_3_Header />
                <Episode_3_Frame_1/>
                <Episode_3_Frame_2/>
                <Episode_3_Frame_3/>
                <Episode_3_Frame_4/>
                <Episode_3_Frame_5/>
                <Episode_3_Frame_6/>
                <Episode_3_Frame_7/>
                <Footer />
            </article>
        </div>
    );
}