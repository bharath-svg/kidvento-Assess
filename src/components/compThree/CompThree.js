import React from "react";
import "./compthree.css";
import School from "../school/School";
import Home from "../home/Home";

const CompThree = () => {
  return (
    <div className="set_skill">
      <div className="set_skill_header">
        <h4>Set Skill Priority</h4>
      </div>
      <div className="set_skill_body">
        <School />
        <Home />
      </div>
    </div>
  );
};

export default CompThree;
