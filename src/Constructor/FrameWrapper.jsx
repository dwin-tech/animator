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
export function FrameWrapper({
  children,
  color,
  activeFrame,
  index,
  setActiveFrame,
  setFrames,
  frames,
}) {
  const [visible, setVisible] = useState("none");
  const [openDeleteFrame, setOpenDeleteFrame] = useState(false);

  const handleCloseDeleteFrame = () => setOpenDeleteFrame(false);
  const handleOpenDeleteFrame = () => setOpenDeleteFrame(true);

  function handleOnClick() {
    frames.frames.splice(activeFrame, 1);
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
    handleCloseDeleteFrame();
    setActiveFrame(0);
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteFrame}
        onClose={handleCloseDeleteFrame}
        closeAfterTransition
      >
        <Fade in={openDeleteFrame}>
          <Box sx={MODAL_STYLE}>
            <h2>Delete Frame</h2>
            <h3>Are you sure?</h3>
            <div style={{ marginLeft: "200px" }}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={handleCloseDeleteFrame}
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
        style={
          index == activeFrame
            ? { backgroundColor: color, border: "1px solid #1976d2" }
            : null
        }
        className="forFlex"
        onMouseEnter={() => {
          setVisible("block");
        }}
        onMouseLeave={() => {
          setVisible("none");
        }}
      >
        <div className="forFlex">
          {index + 1}

          <div className="framePreview">{children}</div>
        </div>
        <div style={{ display: visible }} className="deleteContainer">
          <Tooltip title="Delete">
            <IconButton
              style={{ height: "30px", width: "30px" }}
              onClick={handleOpenDeleteFrame}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
