import { Paint } from "../JSON/Paint";
import { Footer } from "./episode_1/footer/Fotter";

import { Episode_1_Header } from "./episode_1/header/Episode_1_Header";

export function Constructor() {

    return (
        <div>
             <article className="episode" id="episode_1" style={{
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
                <Paint/>
                <Footer />
            </article>
        </div>
    );
}
// 