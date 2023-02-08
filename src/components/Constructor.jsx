import { useState, useEffect } from "react";
import { getJsonFrame } from "../Constructor/fetch";
import { Frame } from "../Constructor/Frame";
import { LeftSideBar } from "../Constructor/LeftSideBar.jsx";
import { RightSideBar } from "../Constructor/RightSideBar";
import { ExportImport } from "../Constructor/ExportImport";

import "./style.css";

export function Constructor() {
  const [data, setData] = useState({ frames: [] });
  const [activeFrame, setActiveFrame] = useState(0);
  const [activeImg, setActiveImg] = useState();
  const [showStyles, setShowStyles] = useState(false);
  const [frame, setFrame] = useState();
  const [jsonFile, setJsonFile] = useState();

  function isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  useEffect(() => {
    getJsonFrame().then((data) => {
      if (isEmpty(data)) {
        if (jsonFile) {
          setData(JSON.parse(jsonFile));
        } else {
          setData(JSON.parse(localStorage.getItem("frames")));
        }
      } else {
        setData(data);
      }
    });
  }, [jsonFile]);

  return (
    <div className="constructor">
      <div className="topPart">
        <ExportImport setJsonFile={setJsonFile} />
      </div>
      <div className="main">
        <LeftSideBar
          frame={frame}
          frames={data}
          activeFrame={activeFrame}
          setFrame={setFrame}
          setFrames={setData}
          setActiveFrame={setActiveFrame}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          setJsonFile={setJsonFile}
        />

        <div
          className="yamakasi"
          style={{
            boxShadow:
              "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important",
            marginTop: "5%",
          }}
        >
          <Frame data={data?.frames?.[activeFrame]} />
        </div>
        <RightSideBar
          frame={frame}
          frames={data}
          activeFrame={activeFrame}
          setFrame={setFrame}
          setFrames={setData}
          setActiveFrame={setActiveFrame}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          setJsonFile={setJsonFile}
        />
      </div>
    </div>
  );
}
