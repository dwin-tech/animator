import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

export function EditorTabsFrom({
  frames,
  activeFrame,
  activeImg,
  tabIndex,
  handleOnChangeStyles,
  handleOnChangeVariants,
}) {
  return (
    <div value={tabIndex} index={0}>
      <div className="editorInputs">
        <TextField
          placeholder="10% or 30px"
          label="Width"
          value={
            frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
              ?.width || ""
          }
          onChange={(e) => {
            handleOnChangeVariants("hidden", "width", e.target.value);
          }}
          size="small"
        />
        <TextField
          placeholder="10% or 30px"
          label="Height"
          value={
            frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
              ?.height || ""
          }
          onChange={(e) => {
            handleOnChangeVariants("hidden", "height", e.target.value);
          }}
          size="small"
        />
      </div>
      <div id={43424}>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="Top"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.top || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "top", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Bottom"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.bottom || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "bottom", e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="Left"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.left || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "left", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Right"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.right || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "right", e.target.value);
            }}
            size="small"
          />
        </div>

        <div className="editorInputs">
          <FormControl style={{ margin: "7px", width: "226px" }}>
            <InputLabel style={{ marginTop: "-7px" }} id="TransformOrigin">
              TransformOrigin
            </InputLabel>
            <Select
              style={{ height: "40px" }}
              labelId="TransformOrigin"
              id="TransformOrigin"
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                  ?.transformOrigin || ""
              }
              label="TransformOrigin"
              onChange={(e) => {
                handleOnChangeStyles("transformOrigin", e.target.value);
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="bottom right">bottom right</MenuItem>
              <MenuItem value="bottom left">bottom left</MenuItem>
              <MenuItem value="top right">top right</MenuItem>
              <MenuItem value="top left">top left</MenuItem>
            </Select>
          </FormControl>
          <TextField
            placeholder="10% or 30px"
            label="Rotate"
            onBlur={(e) => {
              if (!e.target.value) {
                delete frames.frames[activeFrame].imgs[activeImg].variants
                  ?.hidden?.rotate;
              }
            }}
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.rotate || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "rotate", e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            placeholder="10% or 30px"
            label="X"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.x || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "x", +e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Y"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.y || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "y", +e.target.value);
            }}
            size="small"
          />
        </div>
        <div className="editorInputs">
          <TextField
            type="number"
            inputProps={{ min: 0, max: 1, step: "0.1" }}
            placeholder="from 0 to 1"
            label="Opacity"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.opacity || ""
            }
            onChange={(e) => {
              handleOnChangeVariants("hidden", "opacity", e.target.value);
            }}
            size="small"
          />
        </div>
      </div>
    </div>
  );
}
