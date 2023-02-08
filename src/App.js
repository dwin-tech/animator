import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Constructor } from "./components/Constructor";
import { Episode_1 } from "./components/Episode_1";
import { Episode_2 } from "./components/Episode_2";
import { Episode_3 } from "./components/Episode_3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Episode_1 />} />
      <Route path="/episode_2" element={<Episode_2 />} />
      <Route path="/episode_3" element={<Episode_3 />} />
      <Route path="/constructor" element={<Constructor />} />
    </Routes>
  );
}

export default App;
