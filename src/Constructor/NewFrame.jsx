import ImageUploading from "react-images-uploading";
import "./style.css";
import { Tooltip } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export function NewFrame({ frames, activeFrame, setFrames }) {
  const onChange = (imageList, addUpdateIndex) => {
    frames.frames[activeFrame].imgs.push({
      src: imageList[0]?.data_url,
      alt: "",
      initial: "hidden",
      style: { width: "100%", position: "relative", left: "0" },
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
    <div className="newFrame">
      <div>
        <span style={{ color: "grey", fontSize: "30px" }}>Choose a photo</span>
      </div>
      <div>
        <ImageUploading
          multiple
          //   value={images}
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
                style={{ cursor: "pointer" }}
                onClick={onImageUpload}
              >
                <Tooltip title="Add Photo">
                  <AddPhotoAlternateIcon
                    fontSize="large"
                    // disabled={activeFrame === undefined ? true : false}
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
    </div>
  );
}
