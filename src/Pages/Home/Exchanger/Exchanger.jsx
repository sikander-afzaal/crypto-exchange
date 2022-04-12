import React, { useState } from "react";
import "./Exchanger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoin,
  faEthereum,
  faMonero,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLongArrowRight,
  faLongArrowLeft,
  faChevronDown,
  faQrcode,
  faSearch,
  faLitecoinSign,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Exchanger() {
  const [icon, setIcon] = useState(faBitcoin);
  const [icon2, setIcon2] = useState(faEthereum);
  const [name, setName] = useState("BTC");
  const [name2, setName2] = useState("ETH");
  const [color, setColor] = useState(false); // color of the field
  const [value, setValue] = useState(""); // value of the input fields
  const [value2, setValue2] = useState(""); // value of the input fields
  const [search, setSearch] = useState(false); //state for the input field placeholder
  const [search2, setSearch2] = useState(false); //state for the input field placeholder
  const [currency, setCurrency] = useState(13.1924372); // exchange rate state for left side
  const [currency2, setCurrency2] = useState(0.0750439); // exchange rate state for right side
  const [dollar, setDollar] = useState(200); // dollar
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
    if (search === false) {
      const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
      if (rx_live.test(e.target.value)) {
        setValue((prev) => e.target.value);
      }
    } else {
      setValue((prev) => e.target.value);
    }
  };
  const handleChange2 = (e) => {
    const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
    if (rx_live.test(e.target.value)) {
      setValue2((prev) => e.target.value);
    }
  };
  const coins = [
    { img: faBitcoin, name: "BTC", val: 2.99 },
    { img: faEthereum, name: "ETH", val: 10.99 },
    { img: faMonero, name: "XMR", val: 22.99 },
    { img: faLitecoinSign, name: "LTC", val: 0.0099 },
    { img: faBitcoin, name: "BTC", val: 2.99 },
    { img: faEthereum, name: "ETH", val: 10.99 },
    { img: faMonero, name: "XMR", val: 22.99 },
    { img: faLitecoinSign, name: "LTC", val: 0.0099 },
    { img: faBitcoin, name: "BTC", val: 2.99 },
    { img: faEthereum, name: "ETH", val: 10.99 },
    { img: faMonero, name: "XMR", val: 22.99 },
    { img: faLitecoinSign, name: "LTC", val: 0.0099 },
    { img: faBitcoin, name: "BTC", val: 2.99 },
    { img: faEthereum, name: "ETH", val: 10.99 },
    { img: faMonero, name: "XMR", val: 22.99 },
    { img: faLitecoinSign, name: "LTC", val: 8.0099 },
  ];
  return (
    <div className="exchanger">
      <h1>WITHOUT A TRACE</h1>
      <div className="row-exchange">
        <p>SEND</p>
        <p className="rate">${dollar}</p>
        <p>RECEIVE</p>
      </div>
      <div className="input-div">
        <div className="input1">
          <div className={`inputs ${color ? "" : "orange"}`}>
            <input
              onChange={handleChange}
              value={value}
              placeholder={` ${search ? "Search Currency" : "0.000"}`}
              type="text"
            />
            {search ? (
              <div
                onClick={() => {
                  setSearch((prev) => !prev);
                  setValue("");
                }}
                className="drop-logo"
              >
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ) : (
              <div
                onClick={() => {
                  setSearch((prev) => !prev);
                  setValue("");
                }}
                className="drop-logo"
              >
                <FontAwesomeIcon icon={faChevronDown} />
                <p>{name}</p>
                <FontAwesomeIcon icon={icon} />
              </div>
            )}
            <div className={`dropdown ${search ? "open-drop" : ""}`}>
              {coins.map((elem, index) => {
                return (
                  <div
                    onClick={() => {
                      setSearch(false);
                      setName(elem.name);
                      setIcon(elem.img);
                      setCurrency(elem.val);
                      setDollar(Math.ceil(elem.val));
                    }}
                    className="dropdown-row"
                    key={index}
                  >
                    <FontAwesomeIcon icon={elem.img} />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="desc-input">
            <p>max limit:</p>
            <p>
              1 {name} ≈ {currency} {name2}
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
            {search2 ? (
              <div
                onClick={() => {
                  setSearch2((prev) => !prev);
                  setValue2("");
                }}
                className="drop-logo"
              >
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ) : (
              <div
                onClick={() => {
                  setSearch2((prev) => !prev);
                  setValue2("");
                }}
                className="drop-logo"
              >
                <FontAwesomeIcon icon={icon2} />
                <p>{name2}</p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )}
            <input
              onChange={handleChange2}
              value={value2}
              placeholder={` ${search2 ? "Search Currency" : "0.000"}`}
              type="text"
            />
            <div className={`dropdown ${search2 ? "open-drop" : ""}`}>
              {coins.map((elem, index) => {
                return (
                  <div
                    onClick={() => {
                      setSearch2(false);
                      setName2(elem.name);
                      setIcon2(elem.img);
                      setCurrency2(elem.val);
                      setDollar(Math.ceil(elem.val));
                    }}
                    className="dropdown-row"
                    key={index}
                  >
                    <FontAwesomeIcon icon={elem.img} />
                    <p>{elem.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="desc-input">
            <p>
              1 {name2} ≈ {currency2} {name}
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper-bottom-exchange">
        <div className="input-div-address">
          <input
            type="text"
            className="address"
            placeholder={`Receiving Wallet (${name2}) Address`}
          />
          <FontAwesomeIcon icon={faQrcode} />
        </div>
        <p className="note">
          *Only send from wallets. Transactions sent from a Smart Contract are
          not accepted.
        </p>
      </div>
      <Link to={"/Order"} className="exchange">
        EXCHANGE NOW
      </Link>
    </div>
  );
}

export default Exchanger;
