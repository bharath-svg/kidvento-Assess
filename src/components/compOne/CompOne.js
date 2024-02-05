import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./compone.css";

const CompOne = () => {
  return (
    <div className="school_level">
      <div className="school_level_header">
        <h4> School Level </h4>
      </div>
      <div className="school_level_body">
        <div className="school_level_body_one">
          <div className="school_level_body_first_child">Level 0</div>
          <div className="school_level_body_sec_child">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompOne;
