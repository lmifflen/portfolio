import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <div className="about-me-container">
        <h1>About Me</h1>
        <div className="about-bold">
          ADVENTUROUS, HARDWORKING FULL STACK DEVELOPER AND TECHNICAL PROJECT
          MANAGER
        </div>
        </div>

        <img
          className="assiniboine"
          src="./Assiniboine.svg"
          alt="Assiniboine"
        />
      </div>
      <div className="about-right">
        <div className="about-text">
          I am an adventurous, hard working Full Stack Developer and Technical
          Project Manager with a thirst for knowledge. My vision, dedication to
          the task at hand, leadership abilities, and relaxed personality make
          me an excellent member of a team, while my confidence, ingenuity, and
          attention to detail allow me to work comfortably in an independent
          environment. <br></br> <br></br>Undergoing a recent career transition I chose to
          make the move into technology because I want to work on meaningful
          projects that create a positive impact on the world around me.{" "}
          <br></br><br></br>In addition, I enjoyed the technical aspects of my previous
          career as a Geophysicist including mapping using seismic
          interpretation, modelling, and post-stack inversion, database
          management, and using Mathematica. <br></br><br></br> When not working or
          studying I have many extracurricular activities including mountain
          biking, splitboarding, hiking, swimming, camping, traveling and
          working out. <br></br> <br></br>If you have any questions about my credentials
          or have opportunities available please do not hesitate to contact me
          by email at lmifflen@gmail.com.
        </div>
        <div className="splitboard">
          <img src="./Splitboard.svg" alt="Luke" />
        </div>
      </div>
    </div>
  );
};

export default About;
