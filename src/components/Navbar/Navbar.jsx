import React, { useState } from "react";
import Contact from "../Contact/Contact";
import ChatPopup from "../Contact/ContactPopup";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [contact, setContact] = React.useState(false);
  return (
    <div className="navbar">
      <div className="holder">
      <div className="logo">
        <img src="./Logo.png" alt="logo" />
      </div>
     
          </div>
      {/* <div className="navlist-container"> */}
     
          
          
        
      <ul className={click ? "nav-menu active" : "nav-list"}>
        <li>
          <a href="#home" onClick={handleClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={handleClick}>Projects</a>
        </li>
        <div className="contact-button"> <ChatPopup></ChatPopup>
           
           </div>
        
      </ul>
      {/* </div> */}
      
       <div
              className="hamburger"
              onClick={handleClick}
              style={{
                marginBottom: "1rem",
              }}
            > 
            <img src="./hamburger.svg" alt="hamburger" />
             
            </div>
           
    </div>
  );
};

export default Navbar;
