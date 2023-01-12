import { Constructor_Header } from "../Constructor/header/Constructor_Header";
import { Paint } from "../Constructor/Paint";
import { Footer } from "./episode_1/footer/Fotter";

export function Constructor() {
  return (
    <div>
      <article
        className="episode"
        id="episode_1"
        style={{
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollSnapType: "mandatory",
          scrollSnapType: "y mandatory",
          backgroundColor: "black",
          scrollPadding: "10px",
          scrollBehavior: "smooth",
          position: "relative",
          scrollSnapStop: "always",
        }}
      >
        <Constructor_Header />
        <Paint />
        <Footer />
      </article>
    </div>
  );
}
//
