import React from "react";
import { specialData } from "../../data/Data";
import "./special.css";

const Special = () => {
  const dragStarted = (e, item) => {
    e.dataTransfer.setData("item", item);
  };
  return (
    <div className="special">
      <div className="special_header">
        <p>
          Special <span className="span">(Level 0)</span>
        </p>
      </div>
      <div className="special_child">
        {specialData.map((item) => {
          return (
            <div
              draggable={true}
              onDragStart={(e) => dragStarted(e, item.name)}
              key={item.id}
              className="special_child_nested"
            >
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Special;
