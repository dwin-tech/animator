import { useState } from "react";
import Button from "@mui/material/Button";
import { ImgEditor } from "./imgEditor";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

export function RightSideBar({
  frame,
  frames,
  setActiveFrame,
  activeFrame,
  setFrame,
  setFrames,
  setActiveImg,
  activeImg,
  setJsonFile,
}) {
  const [openLeff, setOpenLeft] = useState(true);

  const style = {
    height: "800px",
    width: "auto",
    right: "0",
  };

  return (
    <div className="sideBars">
      <Button onClick={() => setOpenLeft(!openLeff)}>
        <MultipleStopIcon />
      </Button>
      <div
        style={openLeff ? style : { ...style, width: "0" }}
        className="leftSideBar"
      >
        <ImgEditor
          frame={frame}
          setFrame={setFrame}
          setActiveFrame={setActiveFrame}
          activeFrame={activeFrame}
          frames={frames}
          setFrames={setFrames}
          setActiveImg={setActiveImg}
          activeImg={activeImg}
          setJsonFile={setJsonFile}
        />
      </div>
    </div>
  );
}
