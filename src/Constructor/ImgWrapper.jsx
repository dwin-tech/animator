import { Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

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

export function ImgWrapper({
  children,
  img,
  setImg,
  index,
  activeImg,
  setActiveImg,
  setFrames,
  frames,
  activeFrame,
}) {
  const [visible, setVisible] = useState("none");
  const [openDeleteImg, setOpenDeleteImg] = useState(false);

  const handleOpenDeleteImg = () => setOpenDeleteImg(true);
  const handleCloseDeleteImg = () => setOpenDeleteImg(false);

  function handleOnClick() {
    frames.frames[activeFrame].imgs.splice(activeImg, 1);
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
    handleCloseDeleteImg();
    setActiveImg(0);
    setImg(frames.frames[activeFrame].imgs[0]);
  }

  return (
    <div>
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
              <Button variant="contained" onClick={handleOnClick}>
                Delete
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
      <div
        onMouseEnter={() => {
          setVisible("inLine-flex");
        }}
        onMouseLeave={() => {
          setVisible("none");
        }}
        // key={img.src}
        className="imgBox"
        style={
          index == activeImg
            ? { border: "2px solid grey", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={() => {
          setActiveImg(index);
          setImg(img);
        }}
      >
        {children}
        <div style={{ display: visible }} className="deleteContainerImg">
          <Tooltip title="Delete">
            <IconButton
              style={{ height: "30px", width: "30px" }}
              onClick={handleOpenDeleteImg}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
