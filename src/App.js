import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Episode_1 } from "./components/Episode_1";
import { Episode_2 } from "./components/Episode_2";
import { Episode_2_temp } from "./components/Episode_2_temp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Episode_1 />} />
      <Route path="/episode_2" element={<Episode_2 />} />
      <Route path="/episode_2_temp" element={<Episode_2_temp />} />
    </Routes>
  );
}

export default App;
