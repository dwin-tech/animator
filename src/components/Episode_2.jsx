import { Footer } from "./episode_1/footer/Fotter";
import { Episode_2_Frame_1 } from "./episode_2/episod_2_frame_1/episod_2_frame_1";
import { Episode_2_Header } from "./episode_2/header/Episode_2_Header";

export function Episode_2() {

    return (
        <div>
            <article className="App" id="Episode_2" style={{
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
                <Footer />
            </article>
        </div>
    );
}