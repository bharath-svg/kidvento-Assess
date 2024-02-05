import React from "react";
import "./comptwo.css";
import Core from "../core/Core";
import Special from "../special/Special";
import Creative from "../creative/Creative";

const CompTwo = () => {
  return (
    <div className="skills">
      <div className="skills_child">
        <div className="skills_header">
          <h4> Skills Selected </h4>
        </div>
        <div className="skills_body">
          <Core />
          <Special />
          <Creative />
        </div>
      </div>
    </div>
  );
};

export default CompTwo;
