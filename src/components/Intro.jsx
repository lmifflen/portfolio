import React from "react";
// import "./Intro.css";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="container">
      <div className="right">
        <h1>
          {" "}
          HELLO <br></br>I'M LUKE{" "}
        </h1>
      </div>
      <div className="left">
        <div className="imageContainer">
      
<img src="./luketest.svg" alt="Luke" />
<div className="imageOverlay"></div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
