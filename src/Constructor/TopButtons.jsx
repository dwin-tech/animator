import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import ImportFile from "./Inport";
import { useNavigate } from "react-router-dom";
import example from "./example.json";

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

export function TopButtons({ setJsonFile }) {
  const navigate = useNavigate();

  const exportData = () => {
    const data = localStorage.getItem("frames");
    const jsonString = `data:text/json;chatset=utf-8,${data}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "frames.json";

    link.click();
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleOnClick() {
    setJsonFile(JSON.stringify(example));
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(example));
  }

  return (
    <div className="topButtons">
      <div>
        <Button
          style={{
            marginLeft: "20px",
          }}
          variant="contained"
          onClick={() => {
            navigate("/constructor/preview");
          }}
        >
          PreView
        </Button>
        <Button
          style={{
            marginLeft: "20px",
          }}
          variant="contained"
          onClick={handleOnClick}
        >
          Example
        </Button>
      </div>
      <div>
        <Button
          style={{
            marginRight: "20px",
          }}
          variant="contained"
          onClick={exportData}
        >
          Export
        </Button>
        <Button
          style={{
            marginRight: "20px",
          }}
          onClick={handleOpen}
          variant="contained"
        >
          Import
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <Box sx={MODAL_STYLE}>
              <ImportFile handleClose={handleClose} setJsonFile={setJsonFile} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
