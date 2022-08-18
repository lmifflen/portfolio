import React from "react";
import Typewriter from "typewriter-effect";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
        I am
    <div className="typewriter">
      <Typewriter
        options={{
          strings: ["Full Stack Developer", "Technical Project Manager", "Adventurer"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
    </div>
  );
};

export default Introduction;
