import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className={`right-nav ${open ? "open-nav" : ""}`}>
        <Link to="/" className="nav-links active">
          Home
        </Link>
        <a href="#how" className="nav-links">
          How it works
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
