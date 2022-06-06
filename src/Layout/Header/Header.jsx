import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState([true, false, false]);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className={`right-nav ${open ? "open-nav" : ""}`}>
        <Link
          onClick={() => {
            setOpen((prev) => !prev);
            setActive([true, false, false]);
          }}
          to="/"
          className={`nav-links ${active[0] ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setOpen((prev) => !prev);
            setActive([false, true, false]);
            setTimeout(() => {
              document.querySelector("#how").scrollIntoView();
            }, 200);
          }}
          to="/"
          className={`nav-links ${active[1] ? "active" : ""}`}
        >
          How it works
        </Link>

        <a href="#" className="nav-links">
          Whitepaper
        </a>
        <a href="#" className="nav-links">
          Buy $POOF{" "}
        </a>
        <Link
          onClick={() => {
            setOpen((prev) => !prev);
            setActive([false, false, true]);
            setTimeout(() => {
              document.querySelector("#how").scrollIntoView();
            }, 200);
          }}
          to="/Staking"
          className={`nav-links ${active[2] ? "active" : ""}`}
        >
          Staking
        </Link>
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
