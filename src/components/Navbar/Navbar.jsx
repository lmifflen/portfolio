import React from "react";
import Contact from "../Contact/Contact";
import ChatPopup from "../Contact/ContactPopup";
import "./Navbar.css";

const Navbar = () => {
  // const [contact, setContact] = React.useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./Logo.png" alt="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <div className="contact-button"> <ChatPopup></ChatPopup>
           
          </div>
          
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
