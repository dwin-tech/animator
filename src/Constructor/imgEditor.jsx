import { useState } from "react";
import { Editor } from "./Editor";
import ImageUploading from "react-images-uploading";
import "./style.css";
import { Tooltip } from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ImgWrapper } from "./ImgWrapper";

export function ImgEditor({
  frames,
  setFrame,
  setFrames,
  activeFrame,
  setActiveFrame,
  activeImg,
  setActiveImg,
  setJsonFile,
}) {
  const [images, setImages] = useState([]);
  const [img, setImg] = useState();
  const [openDeleteFrame, setOpenDeleteFrame] = useState(false);

  const handleOpenDeleteFrame = () => setOpenDeleteFrame(true);

  const handleCloseDeleteFrame = () => setOpenDeleteFrame(false);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    frames.frames[activeFrame].imgs.push({
      src: imageList[0]?.data_url,
      alt: "",
      style: { width: "100%", position: "absolute" },
      variants: {
        hidden: {},
        show: {
          transition: {
            // duration: 0.5,
            // delay: 0.2,
            forwards: 1,
            ease: "linear",
          },
        },
      },
    });
    setFrames({ ...frames });
    localStorage.clear();
    localStorage.setItem("frames", JSON.stringify(frames));
  };

  return (
    <div className="imgEditor">
      <div className="imgs">
        {frames?.frames?.[activeFrame]?.imgs?.map((img, index) => {
          return (
            <ImgWrapper
              key={img.src + index}
              img={img}
              setImg={setImg}
              index={index}
              activeImg={activeImg}
              setActiveImg={setActiveImg}
              activeFrame={activeFrame}
              frames={frames}
              setFrames={setFrames}
            >
              <img
                style={{ width: "100px", objectFit: "contain" }}
                src={img.src}
                alt=""
              />
            </ImgWrapper>
          );
        })}
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
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
                className="imgBox"
                style={
                  !frames?.frames?.length
                    ? { display: "none", cursor: "pointer" }
                    : { display: "block", cursor: "pointer" }
                }
                onClick={onImageUpload}
              >
                <Tooltip title="Add Photo">
                  <AddPhotoAlternateIcon
                    fontSize="large"
                    disabled={activeFrame === undefined ? true : false}
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
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </>
          )}
        </ImageUploading>
      </div>
      <div>
        <Editor
          frame={frames?.frames?.[activeFrame]}
          setFrame={setFrame}
          setImg={setImg}
          img={img}
          setFrames={setFrames}
          frames={frames}
          activeFrame={activeFrame}
          setActiveFrame={setActiveFrame}
          activeImg={activeImg}
          setJsonFile={setJsonFile}
          setActiveImg={setActiveImg}
        />
      </div>
    </div>
  );
}
