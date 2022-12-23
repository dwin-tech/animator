import { Footer } from "./episode_1/footer/Fotter";
import { Episode_2_Frame_1 } from "./episode_2/episode_2_frame_1/Episode_2_frame_1";
import { Episode_2_Frame_2 } from "./episode_2/episode_2_frame_2/Episode_2_frame_2";
import { Episode_2_Frame_3 } from "./episode_2/episode_2_frame_3/Episode_2_frame_3";
import { Episode_2_Frame_4 } from "./episode_2/episode_2_frame_4/Episode_2_frame_4";

import { Episode_2_Header } from "./episode_2/header/Episode_2_Header";

export function Episode_2() {

    return (
        <div>
            <article className="episode" id="episode_2" style={{
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
                <Episode_2_Header />
                <Episode_2_Frame_1 />
                <Episode_2_Frame_2/>
                <Episode_2_Frame_3/>
                <Episode_2_Frame_4/>
                
                <Footer />
            </article>
        </div>
    );
}