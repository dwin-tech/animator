import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { emptyJson } from "./constants";
import { newFrame } from "./constants";
import "./style.css";

export function Paint({
  frames,
  setFrames,
  activeFrame,
  activeImg,
  setActiveImg,
  setShowStyles,
  showStyles,
}) {
  const [imgSrc, setImgSrc] = useState();
  const [imgName, setImgName] = useState();
  const [imgs, setImgs] = useState([]);
  const [images, setImages] = useState([]);
  const [width, setWidth] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [showWidth, setShowWidth] = useState();
  const [showLeft, setShowLeft] = useState();
  const [showTop, setShowTop] = useState();
  const [hiddenWidth, setHiddenWidth] = useState();
  const [hiddenLeft, setHiddenLeft] = useState();
  const [hiddenTop, setHiddenTop] = useState();
  const [hiddenOpacity, setHiddenOpacity] = useState();
  const [showOpacity, setShowOpacity] = useState();
  const [rotateFrom, setRotateFrom] = useState();
  const [rotateTo, setRotateTo] = useState();
  const [repeat, setRepeat] = useState();
  const [duration, setDuration] = useState();
  const [delay, setDelay] = useState();
  const [hiddenRotate, setHiddenRotate] = useState();
  const [position, setPosition] = useState();
  const [zIndex, setZIndex] = useState();
  const [initial, setInitial] = useState();
  const [showStylesCount, setShowStylesCount] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/csstree-validator/dist/csstree-validator.js";
    script.async = true;

    document.body.appendChild(script);

    const script1 = document.createElement("script");

    script1.src =
      "https://unpkg.com/csstree-validator/dist/csstree-validator.js";
    script1.async = true;

    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script1);
    };
  }, []);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  function paintStyles(obj) {
    if (obj) {
      return Object.entries(obj)?.map((e) => e[0] + " : " + e[1]);
    }
  }

  return (
    <div className="mainContainer">
      {/* <p style={{ color: "white" }}>Initial State</p> */}
      {/* <button
        onClick={() => {
          setImgName("");
          setWidth("");
          setLeft("");
          setTop("");
          setHiddenTop("");
          setHiddenLeft("");
          setHiddenWidth("");
          setHiddenOpacity("");
          setHiddenRotate("");
          setShowTop("");
          setShowLeft("");
          setShowWidth("");
          setShowOpacity("");
          setRotateFrom("");
          setRotateTo("");
          setRepeat("");
          setDelay("");
          setDuration("");
          setPosition("position");
          setZIndex("zIndex");
          setInitial("initial");
          setImages([]);
          setShowStyles(false);
        }}
      >
        Clear
      </button> */}
      {/* <div className="styles"> */}
      <div className="topPart">
        <div className="addImg">
          <p style={{ color: "white" }}>add img</p>
          <div className="uploadImg">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button onClick={onImageRemoveAll}>Remove all images</button>
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
                </div>
              )}
            </ImageUploading>
            <input
              type="text"
              value={imgName}
              placeholder="img name"
              onChange={(e) => {
                setImgName(e.target.value);
              }}
            />
            <button
              onClick={() => {
                console.log(activeFrame, "qwerty", frames.frames[activeFrame]);
                console.log("===...", frames.frames);
                if (!frames.frames[activeFrame]) {
                  frames.frames[activeFrame] = emptyJson.frames[0];
                }

                const isEmpty = frames.frames[activeFrame].imgs.length
                  ? false
                  : true;

                frames.frames[activeFrame].imgs.push({
                  src: images[0]?.data_url,
                  alt: imgName,
                  style: {},
                  variants: {
                    hidden: {},
                    show: {
                      transition: {
                        duration: 1.5,
                        delay: 0.5,
                        forwards: 1,
                        ease: "linear",
                      },
                    },
                  },
                });
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              ADD IMG
            </button>
            <button onClick={() => setShowStylesCount(1)}>Add styles</button>
          </div>
        </div>

        {console.log("showStylesCount", showStylesCount)}
        {showStylesCount != 0 ? (
          <div className="selectImg">
            <label on for="selectImg" style={{ color: "white" }}>
              Select an img
            </label>
            <select
              name="selectImg"
              id="selectImg"
              onChange={(e) => {
                frames.frames[activeFrame]?.imgs?.map((img, i) => {
                  if (img.src == e.target.value) {
                    setShowStyles(true);
                    setActiveImg(i);
                    localStorage.clear();
                    localStorage.setItem("frames", JSON.stringify(frames));
                  }
                });
                setImgSrc(e.target.value);
              }}
            >
              <option value="">select an img</option>
              {frames.frames[activeFrame]?.imgs?.map((img) => {
                return <option value={img.src}>{img.alt}</option>;
              })}
            </select>
            <label on for="position" style={{ color: "white" }}></label>
            <select
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
                  ?.position
                  ? frames.frames[activeFrame].imgs[activeImg].style.position
                  : position
              }
              name="position"
              id="position"
              onChange={(e) => {
                setPosition(e.target.value);
                frames.frames[activeFrame].imgs[activeImg].style.position =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <option value="position">Position</option>
              <option value="relative">relative</option>
              <option value="absolute">absalute</option>
            </select>
            <label on for="zIndex" style={{ color: "white" }}></label>
            <select
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.zIndex
                  ? frames.frames[activeFrame].imgs[activeImg].style.zIndex
                  : zIndex
              }
              name="zIndex"
              id="zIndex"
              onChange={(e) => {
                setZIndex(e.target.value);
                frames.frames[activeFrame].imgs[activeImg].style.zIndex =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <option value="">zIndex</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <label on for="initial" style={{ color: "white" }}></label>
            <select
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.initial
                  ? frames.frames[activeFrame].imgs[activeImg].initial
                  : initial
              }
              name="initial"
              id="initial"
              onChange={(e) => {
                setInitial(e.target.value);
                frames.frames[activeFrame].imgs[activeImg].initial =
                  e.target.value;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              <option value="">initial</option>
              <option value="hidden">hidden</option>
              <option value="show">show</option>
            </select>
            <input
              type="text"
              placeholder="width"
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.width
                  ? frames.frames[activeFrame].imgs[activeImg].style.width
                  : ""
              }
              onChange={(e) => {
                setWidth(e.target.value);
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            />
            <button
              onClick={() => {
                frames.frames[activeFrame].imgs[activeImg].style.width = width;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              ADD
            </button>
            <input
              type="text"
              placeholder="left"
              value={
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style?.left
                  ? frames.frames[activeFrame].imgs[activeImg].style.left
                  : ""
              }
              onChange={(e) => {
                setLeft(e.target.value);
              }}
            />
            <button
              onClick={() => {
                frames.frames[activeFrame].imgs[activeImg].style.left = left;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              ADD
            </button>
            <input
              type="text"
              placeholder="top"
              value={
                frames?.frames?.[activeFrame]?.imgs[activeImg]?.style?.top
                  ? frames.frames[activeFrame].imgs[activeImg].style.top
                  : ""
              }
              onChange={(e) => {
                setTop(e.target.value);
              }}
            />
            <button
              onClick={() => {
                frames.frames[activeFrame].imgs[activeImg].style.top = top;
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              ADD
            </button>
            <button
              onClick={() => {
                frames.frames[activeFrame].imgs.splice(activeImg, 1);
                setFrames({ ...frames });
                localStorage.clear();
                localStorage.setItem("frames", JSON.stringify(frames));
              }}
            >
              REMOVE AN IMG
            </button>
            <button onClick={() => setShowStylesCount(2)}>Add animation</button>
          </div>
        ) : null}
      </div>

      {showStylesCount != 0 && showStylesCount != 1 ? (
        <div>
          {" "}
          <p style={{ color: "white" }}>Animation</p>
          <p style={{ color: "white" }}>Hidden</p>
          <input
            type="text"
            placeholder="hidden top"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.top
                ? frames.frames[activeFrame].imgs[activeImg].variants.hidden.top
                : ""
            }
            onChange={(e) => {
              setHiddenTop(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.top =
                hiddenTop;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="hidden left"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.left
                ? frames.frames[activeFrame].imgs[activeImg].variants.hidden
                    .left
                : ""
            }
            onChange={(e) => {
              setHiddenLeft(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.left =
                hiddenLeft;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="hidden width"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.width
                ? frames.frames[activeFrame].imgs[activeImg].variants.hidden
                    .width
                : ""
            }
            onChange={(e) => {
              setHiddenWidth(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.hidden.width =
                hiddenWidth;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="hidden opacity"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.opacity
                ? frames.frames[activeFrame].imgs[activeImg].variants.hidden
                    .opacity
                : ""
            }
            onChange={(e) => {
              setHiddenOpacity(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.hidden.opacity = hiddenOpacity;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="hidden rotate"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.hidden
                ?.rotate
                ? frames.frames[activeFrame].imgs[activeImg].variants.hidden
                    .rotate
                : ""
            }
            onChange={(e) => {
              setHiddenRotate(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.hidden.rotate = hiddenRotate;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <p style={{ color: "white" }}>Show</p>
          <input
            type="text"
            placeholder="show top"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.top
                ? frames.frames[activeFrame].imgs[activeImg].variants.show.top
                : ""
            }
            onChange={(e) => {
              setShowTop(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.top =
                showTop;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="show left"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.left
                ? frames.frames[activeFrame].imgs[activeImg].variants.show.left
                : ""
            }
            onChange={(e) => {
              setShowLeft(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.left =
                showLeft;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="show width"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.width
                ? frames.frames[activeFrame].imgs[activeImg].variants.show.width
                : ""
            }
            onChange={(e) => {
              setShowWidth(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.width =
                showWidth;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="show opacity"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.opacity
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    .opacity
                : ""
            }
            onChange={(e) => {
              setShowOpacity(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[activeImg].variants.show.opacity =
                showOpacity;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <p style={{ color: "white" }}>rotate</p>
          <input
            type="text"
            placeholder="rotate from"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.rotate?.[0]
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    ?.rotate[0]
                : ""
            }
            onChange={(e) => {
              setRotateFrom(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="rotate to"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                ?.rotate?.[1]
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    ?.rotate[1]
                : ""
            }
            onChange={(e) => {
              setRotateTo(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // TBD cleanup
              frames.frames[activeFrame].imgs[activeImg].variants.show.rotate =
                rotateTo != "" && rotateTo != ""
                  ? rotateFrom
                  : [rotateFrom, rotateTo];

              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <p style={{ color: "white" }}>transition</p>
          <input
            type="text"
            placeholder="repeat"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                .transition.repeat
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    .transition.repeat
                : ""
            }
            onChange={(e) => {
              setRepeat(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.repeat = repeat;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="delay"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                .transition.delay
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    .transition.delay
                : ""
            }
            onChange={(e) => {
              setDelay(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.delay = delay;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
          <input
            type="text"
            placeholder="duration"
            value={
              frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.variants?.show
                .transition.duration
                ? frames.frames[activeFrame].imgs[activeImg].variants.show
                    .transition.duration
                : ""
            }
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          <button
            onClick={() => {
              frames.frames[activeFrame].imgs[
                activeImg
              ].variants.show.transition.duration = duration;
              setFrames({ ...frames });
              localStorage.clear();
              localStorage.setItem("frames", JSON.stringify(frames));
            }}
          >
            ADD
          </button>
        </div>
      ) : null}

      <button
        onClick={() => {
          frames.frames.push(newFrame);
          setFrames({ ...frames });
          localStorage.clear();
          localStorage.setItem("frames", JSON.stringify(frames));
        }}
        style={{ margin: "20px" }}
      >
        ADD A NEW FRAME
      </button>
      {/* {
        <div className="showStyles">
          <p>styles</p>

          {showStyles
            ? paintStyles(
                frames?.frames?.[activeFrame]?.imgs?.[activeImg]?.style
              )?.map((prop) => {
                return <p>{prop}</p>;
              })
            : null}
        </div>
      } */}
    </div>
  );
}
