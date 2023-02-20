import { TextField } from "@mui/material";

import "./style.css";

export function EditorTbasTransition({
  frames,
  activeFrame,
  activeImg,
  tabIndex,
  updateFrames,
}) {
  function handleOnChangeVariantsTransition(key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants.show.transition[key] =
      value;
    updateFrames(frames);
  }

  return (
    <div value={tabIndex} index={2}>
      <div className="editorInputs">
        <TextField
          inputProps={{ min: 0 }}
          type="number"
          placeholder="2 times"
          label="Repeat"
          value={
            frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
              ?.transition?.repeat || ""
          }
          onChange={(e) => {
            handleOnChangeVariantsTransition("repeat", e.target.value);
          }}
          size="small"
        />
        <TextField
          inputProps={{ min: 0 }}
          type="number"
          placeholder="0.7 speed"
          label="Duration"
          value={
            frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
              ?.transition?.duration || ""
          }
          onChange={(e) => {
            handleOnChangeVariantsTransition("duration", e.target.value);
          }}
          size="small"
        />
        <TextField
          inputProps={{ min: 0 }}
          type="number"
          placeholder="0.7 sec"
          label="Delay"
          value={
            frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
              ?.transition?.delay || ""
          }
          onChange={(e) => {
            handleOnChangeVariantsTransition("delay", e.target.value);
          }}
          size="small"
        />
      </div>
    </div>
  );
}
