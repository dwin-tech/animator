import "./style.css";
import Button from "@mui/material/Button";
import { Frame } from "./Frame";
import { useState } from "react";
import { newFrame } from "./constants";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const style = {
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

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function FramesPanel({
  frames,
  setActiveFrame,
  activeFrame,
  setFrame,
  setFrames,
  setActiveImg,
}) {
  const [color, setColor] = useState("  ");
  const [changeColorIndex, setChangeColorIndex] = useState();
  const [visible, setVisible] = useState("none");

  const [openDeleteFrame, setOpenDeleteFrame] = useState(false);
  const handleOpenDeleteFrame = () => setOpenDeleteFrame(true);
  const handleCloseDeleteFrame = () => setOpenDeleteFrame(false);

  function handleOnDragEnd({ destination, source }) {
    if (!destination) return;

    const newItems = reorder(frames?.frames, source.index, destination.index);
    setFrames({ frames: newItems });
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteFrame}
        onClose={handleCloseDeleteFrame}
        closeAfterTransition
      >
        <Fade in={openDeleteFrame}>
          <Box sx={style}>
            <h2>Delete Frame</h2>
            <h3>Are you sure?</h3>
            <div style={{ marginLeft: "200px" }}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={handleCloseDeleteFrame}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  frames.frames.splice(activeFrame, 1);
                  setFrames({ ...frames });
                  localStorage.clear();
                  localStorage.setItem("frames", JSON.stringify(frames));
                  handleCloseDeleteFrame();
                  setActiveFrame(0);
                }}
              >
                Delete
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div
              className="leftPanel"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {frames?.frames?.map((frame, index) => {
                return (
                  <Draggable
                    draggableId={`${frame?.timestamp}`}
                    key={frame?.timestamp}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="frameBox"
                        style={{ ...provided.draggableProps.style }}
                        onClick={() => {
                          setChangeColorIndex(index);
                          setColor("white");
                          setActiveFrame(index);
                          setFrame(frames?.frames?.[index]);
                          setActiveImg(undefined);
                        }}
                      >
                        <div
                          style={
                            index == activeFrame
                              ? { backgroundColor: color }
                              : null
                          }
                          className="forFlex"
                          onMouseEnter={() => {
                            setVisible("block");
                          }}
                          onMouseLeave={() => {
                            setVisible("none");
                          }}
                        >
                          <div className="forFlex">
                            {index + 1}

                            <div className="framePreview">
                              <Frame
                                // maxWidth={150}
                                data={frame}
                                // initial={"show"}
                              />
                            </div>
                          </div>
                          <div
                            style={{ display: visible }}
                            className="deleteContainer"
                          >
                            <Tooltip title="Delete">
                              <IconButton
                                style={{ height: "30px", width: "30px" }}
                                onClick={handleOpenDeleteFrame}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}

              <div
                className="framePreview"
                style={{ marginLeft: "30px" }}
                onClick={() => {
                  frames.frames.push(JSON.parse(JSON.stringify(newFrame)));
                  setFrames({ ...frames });
                }}
              >
                <Tooltip title="Add Frame">
                  <AddIcon
                    style={{
                      width: "50px",
                      height: "50px",
                      marginLeft: "0",
                      marginTop: "25px",
                    }}
                  />
                </Tooltip>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/* 
      
      */}
    </div>
  );
}
