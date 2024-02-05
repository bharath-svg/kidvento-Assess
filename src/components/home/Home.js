import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import "./home.css";

const Home = () => {
  const [drop, setDrop] = useState([]);
  const draggingOver = (e) => {
    e.preventDefault();
  };
  const draggingDroped = (e) => {
    let Data = e.dataTransfer.getData("item");
    setDrop([...drop, Data]);
  };

  const handleClicking = (index) => {
    let homeItem = [...drop];
    homeItem.splice(index, 1);
    setDrop(homeItem);
  };
  return (
    <div
      onDragOver={(e) => draggingOver(e)}
      onDrop={(e) => draggingDroped(e)}
      className="home_priority"
    >
      <div className="home_priority_first_child">
        <p>Home Priority</p>
      </div>
      <div className="scroll_bar_home">
        {drop.map((d, index) => {
          return (
            <div key={d} className="home_priority_sec_child">
              <div className="home_priority_text">{d}</div>
              <div
                onClick={() => handleClicking(index)}
                className="home_priority_icon"
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

export default Home;
