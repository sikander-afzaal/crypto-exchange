import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className={`right-nav ${open ? "open-nav" : ""}`}>
        <a href="#" className="nav-links active">
          Home
        </a>
        <a href="#" className="nav-links">
          How it works
        </a>
        <a href="#" className="nav-links">
          Blog
        </a>
        <a href="#" className="nav-links">
          FAQ
        </a>
      </div>
      <FontAwesomeIcon
        onClick={() => setOpen((prev) => !prev)}
        icon={open ? faXmark : faBars}
        className="opener"
      />
    </div>
  );
}

export default Header;
