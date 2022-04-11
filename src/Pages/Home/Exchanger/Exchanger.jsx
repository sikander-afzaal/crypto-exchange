import React, { useState } from "react";
import "./Exchanger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import {
  faLongArrowRight,
  faLongArrowLeft,
  faChevronDown,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
function Exchanger() {
  const [icon, setIcon] = useState(faBitcoin);
  const [icon2, setIcon2] = useState(faEthereum);
  const [name, setName] = useState("BTC");
  const [name2, setName2] = useState("ETH");
  const [color, setColor] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const handleArrows = () => {
    const original = icon;
    const original2 = icon2;
    const originalName = name;
    const originalName2 = name2;
    setColor((prev) => !prev);
    setIcon(original2);
    setIcon2(original);
    setName(originalName2);
    setName2(originalName);
  };
  const handleChange = (e) => {
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (rx_live.test(e.target.value)) {
      setValue((prev) => e.target.value);
    }
  };
  const handleChange2 = (e) => {
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (rx_live.test(e.target.value)) {
      setValue2((prev) => e.target.value);
    }
  };
  return (
    <div className="exchanger">
      <h1>WITHOUT A TRACE</h1>
      <div className="row-exchange">
        <p>SEND</p>
        <p className="rate">$201.05</p>
        <p>RECEIVE</p>
      </div>
      <div className="input-div">
        <div className="input1">
          <div className={`inputs ${color ? "" : "orange"}`}>
            <input
              onChange={handleChange}
              value={value}
              placeholder="0.000"
              type="text"
            />
            <div className="drop-logo">
              <FontAwesomeIcon icon={faChevronDown} />
              <p>{name}</p>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
          <div className="desc-input">
            <p>max limit:</p>
            <p>
              1 {name} ≈ 13.1924372 {name2}
            </p>
          </div>
        </div>
        <div onClick={handleArrows} className="arrows">
          <FontAwesomeIcon
            icon={faLongArrowRight}
            className={`${color ? "" : "orange-svg"} `}
          />
          <FontAwesomeIcon
            icon={faLongArrowLeft}
            className={`${color ? "orange-svg" : ""} `}
          />
        </div>
        <div className="input1 input2">
          <div className={`inputs ${color ? "orange" : ""}`}>
            <div className="drop-logo">
              <FontAwesomeIcon icon={icon2} />
              <p>{name2}</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <input
              onChange={handleChange2}
              value={value2}
              placeholder="0.000"
              type="text"
            />
          </div>
          <div className="desc-input">
            <p>
              1 {name2} ≈ 0.0750439 {name}
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper-bottom-exchange">
        <div className="input-div-address">
          <input
            type="text"
            className="address"
            placeholder="Your Ethereum Address"
          />
          <FontAwesomeIcon icon={faQrcode} />
        </div>
        <p className="note">
          *Only send from wallets. Transactions sent from a Smart Contract are
          not accepted.
        </p>
      </div>
      <button className="exchange">EXCHANGE NOW</button>
    </div>
  );
}

export default Exchanger;
