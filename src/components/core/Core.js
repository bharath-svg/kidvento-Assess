import React from "react";
import "./core.css";
import { coreData } from "../../data/Data";

const Core = () => {
  const dragStarted = (e, item, i) => {
    e.dataTransfer.setData("item", item);
    coreData.splice(i, 1);
  };
  return (
    <div className="core">
      <div className="core_header">
        <p>
          Core <span className="span">(Level 0)</span>
        </p>
      </div>
      <div className="core_child">
        {coreData.map((item) => {
          return (
            <div
              key={item.id}
              draggable={true}
              onDragStart={(e) => dragStarted(e, item.name)}
              className="core_child_nested"
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Core;
