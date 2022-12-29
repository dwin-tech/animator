import { motion } from "framer-motion";
import { getJsonFrame } from "./fetch";
import { usePageCenter } from "../components/usePageCenter";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { blackContainer } from "./index.js";
import { Frames } from "./Frames";
import { JsonEditor as Editor } from "jsoneditor-react";

import "./style.css";

export function Paint() {
  const [data, setData] = useState();
  const [imgSrc, setImgSrc] = useState();

  const animItem = useRef();
  const visible = usePageCenter(animItem);

  useEffect(() => {
    getJsonFrame().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      {data?.frames.map((el, i) => {
        return (
          <div className="forFlex">
            <Frames data={el} />
            <Editor
              value={el}
              onChange={(value) => {
                data.frames[i] = value;
                setData({ ...data });
              }}
            />
            <div>
              <input
                type="text"
                name="img src"
                placeholder="img src"
                onChange={(e) => {
                  setImgSrc(e.target.value);
                }}
              />
              <button
                onClick={(x) => {
                  console.log("imgSrc -->", imgSrc);
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
