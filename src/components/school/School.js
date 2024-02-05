import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import "./school.css";

const School = () => {
  const [drop, setDrop] = useState([]);
  const draggingOver = (e) => {
    e.preventDefault();
  };
  const draggingDrop = (e) => {
    console.log("dropping");
    let Data = e.dataTransfer.getData("item");
    setDrop([...drop, Data]);
  };

  const handleClick = (index) => {
    let schoolItem = [...drop];
    schoolItem.splice(index, 1);
    setDrop(schoolItem);
  };

  return (
    <div
      onDragOver={(e) => draggingOver(e)}
      onDrop={(e) => draggingDrop(e)}
      className="school_priority"
    >
      <div className="school_priority_first_child">
        <p>School Priority</p>
      </div>
      <div className="scroll_bar_school">
        {drop.map((d, index) => {
          console.log(1, index);
          return (
            <div key={d} className="school_priority_sec_child">
              <div className="school_priority_text">{d}</div>
              <div
                onClick={() => handleClick(index)}
                className="school_priority_icon"
              >
                <MdCancelPresentation />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default School;
