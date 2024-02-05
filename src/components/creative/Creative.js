import React from "react";
import { creativeData } from "../../data/Data";
import "./creative.css";
const Creative = () => {
  const dragStarted = (e, item) => {
    e.dataTransfer.setData("item", item);
  };
  return (
    <div className="creative">
      <div className="creative_header">
        <p>
          Creative <span className="span">(Level 0)</span>
        </p>
      </div>
      <div className="creative_child">
        {creativeData.map((item) => {
          return (
            <div
              draggable={true}
              onDragStart={(e) => dragStarted(e, item.name)}
              key={item.id}
              className="creative_child_nested"
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Creative;
