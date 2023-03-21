import { Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ImageUploading from "react-images-uploading";

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

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    frames.frames[activeFrame].imgs[activeImg].src = imageList[0]?.data_url;
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
  };

  function handleOnClick() {
    frames.frames[activeFrame].imgs.splice(activeImg, 1);
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
    handleCloseDeleteImg();
    setActiveImg(0);
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
        className="imgBox"
        style={
          index == activeImg
            ? { border: "2px solid grey", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={() => {
          setActiveImg(index);
        }}
      >
        {children}
        <div style={{ display: visible }} className="deleteContainerImg">
          <IconButton style={{ height: "30px", width: "30px" }}>
            <ImageUploading multiple onChange={onChange} dataURLKey="data_url">
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <>
                  <div
                    style={
                      !frames?.frames?.length ||
                      !frames?.frames?.[activeFrame]?.imgs?.length
                        ? { display: "none" }
                        : {
                            display: "block",
                            cursor: "pointer",
                            marginTop: "4px",
                          }
                    }
                  >
                    <Tooltip title="Update">
                      <InsertPhotoIcon
                        onClick={onImageUpload}
                        fontSize="small"
                        variant="contained"
                        style={
                          (isDragging ? { color: "red" } : undefined,
                          { margin: "35px" })
                        }
                        {...dragProps}
                      />
                    </Tooltip>
                  </div>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </ImageUploading>
          </IconButton>
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
