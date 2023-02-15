import { useState } from "react";
import { Editor } from "./Editor";
import ImageUploading from "react-images-uploading";
import "./style.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

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
  const [border, setBorder] = useState();

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
            <div
              key={img.src}
              className="imgBox"
              style={
                index == activeImg
                  ? { border: "2px solid grey", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
              onClick={() => {
                setBorder(index);
                setActiveImg(index);
                setImg(img);
              }}
            >
              <img
                style={{ width: "100px", objectFit: "contain" }}
                src={img.src}
                alt=""
              />
            </div>
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
