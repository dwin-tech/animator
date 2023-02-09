import "./style.css";
import { Frame } from "./Frame";
import { useState } from "react";
import { newFrame } from "./constants";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FrameWrapper } from "./FrameWrapper";

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
  const [color, setColor] = useState("white");

  function handleOnDragEnd({ destination, source }) {
    if (!destination) return;

    const newItems = reorder(frames?.frames, source.index, destination.index);
    setFrames({ frames: newItems });
  }

  return (
    <div style={{ overflow: "hidden" }}>
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
                          setColor("white");
                          setActiveFrame(index);
                          setFrame(frames?.frames?.[index]);
                          setActiveImg(undefined);
                        }}
                      >
                        <FrameWrapper
                          color={color}
                          activeFrame={activeFrame}
                          index={index}
                          setActiveFrame={setActiveFrame}
                          setFrames={setFrames}
                          frames={frames}
                        >
                          <Frame data={frame} />
                        </FrameWrapper>
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
