import React from "react";
import CompOne from "../../components/compOne/CompOne";
import CompTwo from "../../components/compTwo/CompTwo";
import CompThree from "../../components/compThree/CompThree";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <CompOne />
      <CompTwo />
      <CompThree />
    </div>
  );
};

export default HomePage;
