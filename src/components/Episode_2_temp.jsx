import { Footer } from "./episode_1/footer/Fotter";
import { Episode_2_Frame_8 } from "./episode_2/episode_2_frame_8/Episode_2_frame_8";
import { Episode_2_Frame_9 } from "./episode_2/episode_2_frame_9/Episode_2_frame_9";

import { Episode_2_Header } from "./episode_2/header/Episode_2_Header";

export function Episode_2_temp() {

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
                <Episode_2_Header/>
                <Episode_2_Frame_8/>
                <Episode_2_Frame_9/>
                <Footer />
            </article>
        </div>
    );
}