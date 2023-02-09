import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChipInput from "material-ui-chip-input";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import "./style.css";

const MODAL_STYLE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export function Editor({
  setActiveImg,
  img,
  setFrames,
  frames,
  activeFrame,
  activeImg,
}) {
  const [openDeleteImg, setOpenDeleteImg] = useState(false);
  const handleOpenDeleteImg = () => setOpenDeleteImg(true);
  const handleCloseDeleteImg = () => setOpenDeleteImg(false);

  function updateFrames(frames) {
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
  }
  function handleOnChangeStyles(key, value) {
    frames.frames[activeFrame].imgs[activeImg].style[key] = value;
    updateFrames(frames);
  }

  function handleOnChangeVariants(hiddenShow, key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants[hiddenShow][key] =
      value;
    updateFrames(frames);
  }

  function handleOnChangeVariantsTransition(key, value) {
    frames.frames[activeFrame].imgs[activeImg].variants.show.transition[key] =
      value;
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
        <Root>
          <Divider textAlign="left">
            <h3>Styles</h3>
          </Divider>
        </Root>
        <div>
          <FormControl style={{ margin: "7px", width: "226px" }}>
            <InputLabel style={{ marginTop: "-7px" }} id="Overflow">
              Overflow
            </InputLabel>
            <Select
              style={{ height: "40px" }}
              labelId="Overflow"
              id="Overflow"
              value={img?.style?.overflow || ""}
              label="Overflow"
              onChange={(e) => {
                handleOnChangeStyles("overflow", e.target.value);
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="hidden">hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: "7px", width: "226px" }}>
            <InputLabel style={{ marginTop: "-7px" }} id="Position">
              Position
            </InputLabel>
            <Select
              style={{ height: "40px" }}
              labelId="Position"
              id="Position"
              value={img?.style?.position || ""}
              label="Position"
              onChange={(e) => {
                handleOnChangeStyles("position", e.target.value);
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="relative">relative</MenuItem>
              <MenuItem value="absolute">absolute</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: "7px", width: "226px" }}>
            <InputLabel style={{ marginTop: "-7px" }} id="Initial">
              Initial
            </InputLabel>
            <Select
              style={{ height: "40px" }}
              labelId="Initial"
              id="Initial"
              value={img?.initial || ""}
              label="Initial"
              onChange={(e) => {
                frames.frames[activeFrame].imgs[activeImg].initial =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="show">show</MenuItem>
              <MenuItem value="hidden">hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: "7px", width: "226px" }}>
            <InputLabel style={{ marginTop: "-7px" }} id="TransformOrigin">
              TransformOrigin
            </InputLabel>
            <Select
              style={{ height: "40px" }}
              labelId="TransformOrigin"
              id="TransformOrigin"
              value={img?.style?.transformOrigin || ""}
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
            placeholder="1"
            type="number"
            label="zIndex"
            value={img?.style?.zIndex || ""}
            onChange={(e) => {
              handleOnChangeStyles("zIndex", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Width"
            value={img?.style?.width || ""}
            onChange={(e) => {
              handleOnChangeStyles("width", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Top"
            value={img?.style?.top || ""}
            onChange={(e) => {
              handleOnChangeStyles("top", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Left"
            value={img?.style?.left || ""}
            onChange={(e) => {
              handleOnChangeStyles("left", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Height"
            value={img?.style?.height || ""}
            onChange={(e) => {
              handleOnChangeStyles("height", e.target.value);
            }}
            size="small"
          />
        </div>
        <Root>
          <Divider textAlign="left">
            <h3>Variants</h3>
          </Divider>
        </Root>
        <Root>
          <Divider textAlign="center">Hidden</Divider>
        </Root>
        <div>
          <TextField
            placeholder="10% or 30px"
            label="Hidden Width"
            value={img?.variants?.hidden?.width || ""}
            onChange={(e) => {
              handleOnChangeVariants("hidden", "width", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Hidden Top"
            value={img?.variants?.hidden?.top || ""}
            onChange={(e) => {
              handleOnChangeVariants("hidden", "top", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Hidden Left"
            value={img?.variants?.hidden?.left || ""}
            onChange={(e) => {
              handleOnChangeVariants("hidden", "left", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="from 0 to 1"
            label="Hidden Opacity"
            value={img?.variants?.hidden?.opacity || ""}
            onChange={(e) => {
              handleOnChangeVariants("hidden", "opacity", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Hidden rotate"
            value={img?.variants?.rotate || ""}
            onChange={(e) => {
              handleOnChangeVariants("hidden", "rotate", e.target.value);
            }}
            size="small"
          />
        </div>
        <Root>
          <Divider textAlign="center">Show</Divider>
        </Root>
        <div>
          <TextField
            placeholder="10% or 30px"
            label="Show Width"
            value={img?.variants?.show?.width || ""}
            onChange={(e) => {
              handleOnChangeVariants("show", "width", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Show Top"
            value={img?.variants?.show?.top || ""}
            onChange={(e) => {
              handleOnChangeVariants("show", "top", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Show Left"
            value={img?.variants?.show?.left || ""}
            onChange={(e) => {
              handleOnChangeVariants("show", "left", e.target.value);
            }}
            size="small"
          />
          <TextField
            placeholder="from 0 to 1"
            label="Show opacity"
            value={img?.variants?.show?.opacity || ""}
            onChange={(e) => {
              handleOnChangeVariants("show", "opacity", e.target.value);
            }}
            size="small"
          />
          <ChipInput
            placeholder="10deg or 50px"
            // value={img?.variants?.show?.rotate || []}
            style={{ margin: "7px" }}
            label="rotate"
            allowDuplicates={true}
            onChange={(chips) => {
              handleOnChangeVariants("show", "rotate", chips);
            }}
          />
          <Root>
            <Divider textAlign="center">Transition</Divider>
          </Root>
          <TextField
            type="number"
            placeholder="2 times"
            label="repeat"
            value={img?.variants?.show?.transition?.repeat || ""}
            onChange={(e) => {
              handleOnChangeVariantsTransition("repeat", e.target.value);
            }}
            size="small"
          />
          <TextField
            type="number"
            placeholder="0.7 speed"
            label="duration"
            value={img?.variants?.show?.transition?.duration || ""}
            onChange={(e) => {
              handleOnChangeVariantsTransition("duration", e.target.value);
            }}
            size="small"
          />
          <TextField
            type="number"
            placeholder="0.7 sec"
            label="delay"
            value={img?.variants?.show?.transition?.delay || ""}
            onChange={(e) => {
              handleOnChangeVariantsTransition("delay", e.target.value);
            }}
            size="small"
          />
          <Root>
            <Divider textAlign="left">Add Other properties</Divider>
          </Root>
          <TextField
            label="Any properties"
            value={""}
            onChange={() => {}}
            size="small"
          />
        </div>
        <Button
          style={{
            marginLeft: "10px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
          onClick={handleOpenDeleteImg}
          variant="contained"
        >
          Delete Img
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openDeleteImg}
          onClose={handleCloseDeleteImg}
          closeAfterTransition
        >
          <Fade in={openDeleteImg}>
            <Box sx={MODAL_STYLE}>
              <h2>Delete photo</h2>
              <h3>Are you sure?</h3>
              <div style={{ marginLeft: "200px" }}>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={handleCloseDeleteImg}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    frames.frames[activeFrame].imgs.splice(activeImg, 1);
                    setFrames({ ...frames });
                    localStorage.clear();
                    localStorage.setItem("frames", JSON.stringify(frames));
                    handleCloseDeleteImg();
                    setActiveImg(undefined);
                  }}
                >
                  Delete
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </div>
  );
}
