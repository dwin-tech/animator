import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-css";
import { useState } from "react";
import { Button } from "@mui/material";

export function CustomStylesEditor({ handleOnChangeStyles }) {
  const [customStyles, setCustomStyles] = useState("");

  function onClick() {
    handleOnChangeStyles("customStyles", customStyles);
  }

  return (
    <div>
      <AceEditor
        style={{
          height: "200px",
          width: "450px",
          margin: "7px",
          backgroundColor: "rgb(216, 232, 232)",
        }}
        placeholder={".class{\n  width: 100%;\n  marginLeft: 20px\n}"}
        mode="css"
        theme="tomorrow"
        name="Custom Styles"
        // onLoad={onLoad}
        onChange={(e) => setCustomStyles(e)}
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        // value={``}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <Button
        style={{ marginLeft: "7px" }}
        variant="contained"
        onClick={onClick}
      >
        Save Custom Styles
      </Button>
    </div>
  );
}
