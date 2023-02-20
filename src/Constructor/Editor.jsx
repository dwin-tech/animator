import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import "./style.css";
import { EditorStyles } from "./EditorStyles";
import { EditorTabs } from "./EditorTabs";

export function Editor({ setFrames, frames, activeFrame, activeImg }) {
  function updateFrames(frames) {
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
  }

  function handleOnChangeStyles(key, value) {
    frames.frames[activeFrame].imgs[activeImg].style[key] = value;
    updateFrames(frames);
  }

  return (
    <div
      className="editor"
      style={
        activeImg == undefined ? { display: "none" } : { display: "block" }
      }
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <EditorStyles
          frames={frames}
          activeFrame={activeFrame}
          activeImg={activeImg}
          handleOnChangeStyles={handleOnChangeStyles}
          updateFrames={updateFrames}
        />
        {/* <CustomStylesEditor handleOnChangeStyles={handleOnChangeStyles} /> */}
        <Divider>Animation</Divider>
        <EditorTabs
          frames={frames}
          activeFrame={activeFrame}
          activeImg={activeImg}
          handleOnChangeStyles={handleOnChangeStyles}
          updateFrames={updateFrames}
        />
      </Box>
    </div>
  );
}
