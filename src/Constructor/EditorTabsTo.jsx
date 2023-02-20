import { TextField } from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";

import "./style.css";

export function EditorTbasTo({
  frames,
  activeFrame,
  activeImg,
  tabIndex,
  handleOnChangeVariants,
}) {
  return (
    <div value={tabIndex} index={1}>
      <div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="Width"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.width || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "width", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Height"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.height || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "height", e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="Top"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.top || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "top", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Bottom"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.bottom || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "bottom", e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="Left"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.left || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "left", e.target.value);
            }}
            size="small"
          />{" "}
          <TextField
            placeholder="10% or 30px"
            label="Right"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.right || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "right", e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="X"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.x || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "x", +e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Y"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.y || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "y", +e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs chipInput">
          <MuiChipsInput
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.rotate || []
            }
            label="Rotate"
            onChange={(chips) => {
              handleOnChangeVariants("show", "rotate", chips);
            }}
          />
          <TextField
            type="number"
            inputProps={{ min: 0, max: 1, step: "0.1" }}
            placeholder="from 0 to 1"
            label="Opacity"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.opacity || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("show", "opacity", e.target.value);
            }}
            size="small"
          />
        </div>
      </div>
    </div>
  );
}
