import { getJsonFrame } from "./fetch";
import { usePageCenter } from "../components/usePageCenter";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Frames } from "./Frames";
import ImageUploading from "react-images-uploading";

import "./style.css";

export function Paint() {
  const [data, setData] = useState();
  const [imgSrc, setImgSrc] = useState();
  const [imgName, setImgName] = useState();
  const [imgs, setImgs] = useState([]);
  const [frames, setFrames] = useState([]);
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

  const rotate = [];
  const animItem = useRef();
  const visible = usePageCenter(animItem);

  useEffect(() => {
    getJsonFrame().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    setFrames(data?.frames);
  }, [data]);

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
  console.log("fgram,essssss", frames);
  return (
    <div>
      {frames?.map((el, i) => {
        return (
          <div className="forFlex">
            <Frames data={el} />
            {/* <Editor
              value={el}
              onChange={(value) => {
                data.frames[i] = value;

                setData({ ...data });
              }}
            /> */}
            <div className="mainContainer">
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
                          <button onClick={onImageRemoveAll}>
                            Remove all images
                          </button>
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
                    <button
                      onClick={(x) => {
                        frames[i].imgs.push({
                          src: images[0]?.data_url,
                          alt: "",
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
                        setFrames([...frames]);
                      }}
                    >
                      ADD IMG
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="img name"
                    onChange={(e) => {
                      setImgName(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      frames[i].imgs[frames[i].imgs.length - 1].alt = imgName;
                      setFrames([...frames]);
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div className="selectImg">
                  <label on for="selectImg" style={{ color: "white" }}>
                    Select an img
                  </label>
                  <select
                    name="selectImg"
                    id="selectImg"
                    onChange={(e) => {
                      setImgSrc(e.target.value);
                    }}
                  >
                    {frames[i]?.imgs?.map((img, index) => {
                      return <option value={img.src}>{img.alt}</option>;
                    })}
                  </select>
                  <label on for="position" style={{ color: "white" }}></label>
                  <select
                    name="position"
                    id="position"
                    onChange={(e) => {
                      frames[i].imgs.map((img, index) => {
                        if (img.src == imgSrc) {
                          frames[i].imgs[index].style.position = e.target.value;
                          setFrames([...frames]);
                        }
                      });
                    }}
                  >
                    <option value="">Position</option>
                    <option value="relative">relative</option>
                    <option value="absolute">absalute</option>
                  </select>
                  <label on for="zIndex" style={{ color: "white" }}></label>
                  <select
                    name="zIndex"
                    id="zIndex"
                    onChange={(e) => {
                      frames[i].imgs.map((img, index) => {
                        if (img.src == imgSrc) {
                          frames[i].imgs[index].style.zIndex = e.target.value;
                          setFrames([...frames]);
                        }
                      });
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
                  <input
                    type="text"
                    placeholder="width"
                    onChange={(e) => {
                      setWidth(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      frames[i].imgs.map((img, index) => {
                        if (img.src == imgSrc) {
                          frames[i].imgs[index].style.width = width;
                          setFrames([...frames]);
                        }
                      });
                    }}
                  >
                    ADD
                  </button>
                  <input
                    type="text"
                    placeholder="left"
                    onChange={(e) => {
                      setLeft(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      frames[i].imgs.map((img, index) => {
                        if (img.src == imgSrc) {
                          frames[i].imgs[index].style.left = left;
                          setFrames([...frames]);
                        }
                      });
                    }}
                  >
                    ADD
                  </button>
                  <input
                    type="text"
                    placeholder="top"
                    onChange={(e) => {
                      setTop(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      frames[i].imgs.map((img, index) => {
                        if (img.src == imgSrc) {
                          frames[i].imgs[index].style.top = top;
                          setFrames([...frames]);
                        }
                      });
                    }}
                  >
                    ADD
                  </button>
                </div>
              </div>

              {/* ANIMATION */}

              {/* ANIMATION */}

              {/* ANIMATION */}

              <p style={{ color: "white" }}>Animation</p>
              <div className="hiddenState">
                <p style={{ color: "white" }}>Hidden</p>
                <input
                  type="text"
                  placeholder="hidden top"
                  onChange={(e) => {
                    setHiddenTop(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    frames[i].imgs.map((img, index) => {
                      if (img.src == imgSrc) {
                        frames[i].imgs[index].variants.hidden.top = hiddenTop;
                        setFrames([...frames]);
                      }
                    });
                  }}
                >
                  ADD
                </button>
                <input
                  type="text"
                  placeholder="hidden left"
                  onChange={(e) => {
                    setHiddenLeft(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    frames[i].imgs.map((img, index) => {
                      if (img.src == imgSrc) {
                        frames[i].imgs[index].variants.hidden.left = hiddenLeft;
                        setFrames([...frames]);
                      }
                    });
                  }}
                >
                  ADD
                </button>
                <input
                  type="text"
                  placeholder="hidden width"
                  onChange={(e) => {
                    setHiddenWidth(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    frames[i].imgs.map((img, index) => {
                      if (img.src == imgSrc) {
                        frames[i].imgs[index].variants.hidden.width =
                          hiddenWidth;
                        setFrames([...frames]);
                      }
                    });
                  }}
                >
                  ADD
                </button>
                <input
                  type="text"
                  placeholder="hidden opacity"
                  onChange={(e) => {
                    setHiddenOpacity(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    frames[i].imgs.map((img, index) => {
                      if (img.src == imgSrc) {
                        frames[i].imgs[index].variants.hidden.opacity =
                          hiddenOpacity;
                        setFrames([...frames]);
                      }
                    });
                  }}
                >
                  ADD
                </button>
              </div>
              <p style={{ color: "white" }}>Show</p>
              <input
                type="text"
                placeholder="show top"
                onChange={(e) => {
                  setShowTop(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.top = showTop;
                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <input
                type="text"
                placeholder="show left"
                onChange={(e) => {
                  setShowLeft(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.left = showLeft;
                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <input
                type="text"
                placeholder="show width"
                onChange={(e) => {
                  setShowWidth(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.width = showWidth;
                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <input
                type="text"
                placeholder="show opacity"
                onChange={(e) => {
                  setShowOpacity(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.opacity = showOpacity;
                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <p style={{ color: "white" }}>rotate</p>
              <input
                type="text"
                placeholder="rotate from"
                onChange={(e) => {
                  setRotateFrom(e.target.value);
                }}
              />

              <input
                type="text"
                placeholder="rotate to"
                onChange={(e) => {
                  setRotateTo(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.rotate = [
                        rotateFrom,
                        rotateTo,
                      ];

                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <p style={{ color: "white" }}>transition</p>
              <input
                type="text"
                placeholder="repeat"
                onChange={(e) => {
                  setRepeat(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.transition.repeat =
                        repeat;

                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <input
                type="text"
                placeholder="delay"
                onChange={(e) => {
                  setDelay(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.transition.delay =
                        delay;

                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
              <input
                type="text"
                placeholder="duration"
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  frames[i].imgs.map((img, index) => {
                    if (img.src == imgSrc) {
                      frames[i].imgs[index].variants.show.transition.duration =
                        duration;

                      setFrames([...frames]);
                    }
                  });
                }}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
