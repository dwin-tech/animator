import Box from "@mui/material/Box";
import "./style.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { EditorTabsFrom } from "./EditorTabsFrom";
import { EditorTbasTo } from "./EditorTabsTo";
import { EditorTbasTransition } from "./EditorTabsTransition";

export function EditorTabs({
  frames,
  activeFrame,
  activeImg,
  handleOnChangeStyles,
  updateFrames,
}) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function handleOnChangeVariants(hiddenShow, key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants[hiddenShow][key] =
      value;
    updateFrames(frames);
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="From" value={0} />
          <Tab label="To" value={1} />
          <Tab label="Transition" value={2} />
        </Tabs>
      </Box>
      {tabIndex === 0 && (
        <EditorTabsFrom
          frames={frames}
          activeFrame={activeFrame}
          activeImg={activeImg}
          tabIndex={tabIndex}
          handleOnChangeStyles={handleOnChangeStyles}
          handleOnChangeVariants={handleOnChangeVariants}
        />
      )}
      {tabIndex === 1 && (
        <EditorTbasTo
          frames={frames}
          activeFrame={activeFrame}
          activeImg={activeImg}
          tabIndex={tabIndex}
          handleOnChangeVariants={handleOnChangeVariants}
        />
      )}
      {tabIndex === 2 && (
        <EditorTbasTransition
          frames={frames}
          activeFrame={activeFrame}
          activeImg={activeImg}
          tabIndex={tabIndex}
          updateFrames={updateFrames}
        />
      )}
    </div>
  );
}
