import React from "react";
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
          <div className="inputs orange">
            <input placeholder="0.000" type="text" />
            <div className="drop-logo">
              <FontAwesomeIcon icon={faChevronDown} />
              <p>BTC</p>
              <FontAwesomeIcon icon={faBitcoin} />
            </div>
          </div>
          <div className="desc-input">
            <p>max limit:</p>
            <p>1 BTC ≈ 13.1924372 ETH</p>
          </div>
        </div>
        <div className="arrows">
          <FontAwesomeIcon icon={faLongArrowRight} className="orange-svg" />
          <FontAwesomeIcon icon={faLongArrowLeft} />
        </div>
        <div className="input1 input2">
          <div className="inputs">
            <div className="drop-logo">
              <FontAwesomeIcon icon={faEthereum} />
              <p>ETH</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <input placeholder="0.000" type="text" />
          </div>
          <div className="desc-input">
            <p>1 ETH ≈ 0.0750439 BTC</p>
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
