import { Footer } from "./episode_1/footer/Fotter";

import { Episode_3_Header } from "./episode_3/header/Episode_3_Header";

export function Episode_3() {

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
                <Episode_3_Header />
                <Footer />
            </article>
        </div>
    );
}