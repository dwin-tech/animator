import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "json"];

function DragDrop({ setJsonFile, handleClose }) {
  const fr = new FileReader();
  fr.onload = function (e) {
    setJsonFile(e.target.result);
    handleClose();
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(fr.readAsText(file));
  };
  return (
    <FileUploader
      onSelect={(e) => handleClose()}
      handleChange={handleChange}
      name="file"
      types={fileTypes}
    />
  );
}

export default DragDrop;
