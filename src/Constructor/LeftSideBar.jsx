import { useState } from "react";
import { FramesPanel } from "./framesPanel";
import Button from "@mui/material/Button";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

export function LeftSideBar({
  frames,
  setActiveFrame,
  activeFrame,
  setFrame,
  setFrames,
  setActiveImg,
}) {
  const [openLeff, setOpenLeft] = useState(true);

  const openSTyle = {
    height: "800px",
    width: "auto",
    left: "0",
  };

  const closeStyle = {
    height: "800px",
    width: "5px",
    left: "0",
  };

  return (
    <div className="sideBars">
      <div style={openLeff ? openSTyle : closeStyle} className="leftSideBar">
        <FramesPanel
          frames={frames}
          setActiveFrame={setActiveFrame}
          activeFrame={activeFrame}
          setFrame={setFrame}
          setFrames={setFrames}
          setActiveImg={setActiveImg}
        />
      </div>
      <Button onClick={() => setOpenLeft(!openLeff)}>
        <MultipleStopIcon />
      </Button>
    </div>
  );
}
