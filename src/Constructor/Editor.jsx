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
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

import "./style.css";

const style = {
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
          <Divider textAlign="left">Styles</Divider>
        </Root>
        <div>
          <FormControl style={{ margin: "7px", width: "200px" }}>
            <InputLabel id="Overflow">Overflow</InputLabel>
            <Select
              labelId="Overflow"
              id="Overflow"
              value={img?.style?.overflow ? img?.style?.overflow : ""}
              label="Overflow"
              onChange={(e) => {
                frames.frames[activeFrame].imgs[activeImg].style.overflow =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="hidden">hidden</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: "7px", width: "200px" }}>
            <InputLabel id="Position">Position</InputLabel>
            <Select
              labelId="Position"
              id="Position"
              value={img?.style?.position ? img?.style?.position : ""}
              label="Position"
              onChange={(e) => {
                frames.frames[activeFrame].imgs[activeImg].style.position =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <MenuItem value="">none</MenuItem>
              <MenuItem value="relative">relative</MenuItem>
              <MenuItem value="absolute">absolute</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: "7px", width: "200px" }}>
            <InputLabel id="Initial">Initial</InputLabel>
            <Select
              labelId="Initial"
              id="Initial"
              value={img?.initial ? img?.initial : ""}
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
          <FormControl style={{ margin: "7px", width: "200px" }}>
            <InputLabel id="TransformOrigin">TransformOrigin</InputLabel>
            <Select
              labelId="TransformOrigin"
              id="TransformOrigin"
              value={
                img?.style?.transformOrigin ? img?.style?.transformOrigin : ""
              }
              label="TransformOrigin"
              onChange={(e) => {
                frames.frames[activeFrame].imgs[
                  activeImg
                ].style.transformOrigin = e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
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
            type={Number}
            label="zIndex"
            value={img?.style?.zIndex ? img?.style?.zIndex : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].style.zIndex =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Width"
            value={img?.style?.width ? img?.style?.width : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].style.width =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Top"
            value={img?.style?.top ? img?.style?.top : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].style.top =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Left"
            value={img?.style?.left ? img?.style?.left : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].style.left =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Height"
            value={img?.style?.height ? img?.style?.height : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].style.height =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
        </div>
        <Root>
          <Divider textAlign="left">Variants</Divider>
        </Root>
        <Root>
          <Divider textAlign="center">Hidden</Divider>
        </Root>
        <div>
          <TextField
            placeholder="10% or 30px"
            label="Hidden Width"
            value={
              img?.variants?.hidden?.width ? img?.variants?.hidden?.width : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.width =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Hidden Top"
            value={img?.variants?.hidden?.top ? img?.variants?.hidden?.top : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.top =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Hidden Left"
            value={
              img?.variants?.hidden?.left ? img?.variants?.hidden?.left : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.left =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="from 0 to 1"
            label="Hidden Opacity"
            value={
              img?.variants?.hidden?.opacity
                ? img?.variants?.hidden?.opacity
                : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.hidden.opacity = e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
        </div>
        <TextField
          placeholder="10% or 30px"
          label="Hidden rotate"
          value={img?.variants?.rotate ? img?.variants?.rotate : ""}
          onChange={(e) => {
            frames.frames[activeFrame].imgs[activeImg].variants.rotate =
              e.target.value;
            setFrames({ ...frames });
            localStorage.clear();
            localStorage.setItem("frames", JSON.stringify(frames));
          }}
          size="small"
        />
        <Root>
          <Divider textAlign="center">Show</Divider>
        </Root>
        <div>
          <TextField
            placeholder="10% or 30px"
            label="Show Width"
            value={img?.variants?.show?.width ? img?.variants?.show?.width : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.width =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Show Top"
            value={img?.variants?.show?.top ? img?.variants?.show?.top : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.top =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="10% or 30px"
            label="Show Left"
            value={img?.variants?.show?.left ? img?.variants?.show?.left : ""}
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.left =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="from 0 to 1"
            label="Show opacity"
            value={
              img?.variants?.show?.opacity ? img?.variants?.show?.opacity : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.opacity =
                e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <ChipInput
            placeholder="10deg or 50px"
            value={
              img?.variants?.show?.rotate ? img?.variants?.show?.rotate : []
            }
            style={{ margin: "7px" }}
            label="rotate"
            allowDuplicates={true}
            onChange={(chips) => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.rotate =
                chips;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          />
          <Root>
            <Divider textAlign="center">Transition</Divider>
          </Root>
          <TextField
            placeholder="2 times"
            label="repeat"
            value={
              img?.variants?.show?.transition?.repeat
                ? img?.variants?.show?.transition?.repeat
                : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.repeat = e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="0.7 speed"
            label="duration"
            value={
              img?.variants?.show?.transition?.duration
                ? img?.variants?.show?.transition?.duration
                : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.duration = e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
            size="small"
          />
          <TextField
            placeholder="0.7 sec"
            label="delay"
            value={
              img?.variants?.show?.transition?.delay
                ? img?.variants?.show?.transition?.delay
                : ""
            }
            onChange={(e) => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.delay = e.target.value;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
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
        {/* <Tooltip title="Delete">
          <IconButton
            style={{ height: "30px", width: "30px" }}
            onClick={handleOpenDeleteImg}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openDeleteImg}
          onClose={handleCloseDeleteImg}
          closeAfterTransition
        >
          <Fade in={openDeleteImg}>
            <Box sx={style}>
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
