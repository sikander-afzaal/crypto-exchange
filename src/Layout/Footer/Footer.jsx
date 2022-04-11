import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegramPlane,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Assets/logo.png";
function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="foot-logo" />
      <div className="social-div">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDiscord} />
        <FontAwesomeIcon icon={faTelegramPlane} />
      </div>
    </div>
  );
}

export default Footer;
