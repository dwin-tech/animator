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
  const [color, setColor] = useState("#e8eeee");

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
                          setColor("#e8eeee");
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
                style={{
                  marginLeft: "30px",
                  cursor: "pointer",
                  border: "thin solid rgba(0, 0, 0, 0.12)",
                }}
                onClick={() => {
                  frames?.frames?.push(JSON.parse(JSON.stringify(newFrame)));
                  setFrames({ ...frames });
                  localStorage.clear();
                  localStorage.setItem("frames", JSON.stringify(frames));
                  setActiveFrame(frames?.frames?.length - 1);
                }}
              >
                <Tooltip title="Add Frame">
                  <AddIcon
                    style={{
                      width: "50px",
                      height: "50px",
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
