import React, { useState } from "react";
import "./Order.css";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qr from "../../Assets/checkQr.png";
import card from "../../Assets/card.svg";
import cloud from "../../Assets/cloud.svg";
import timer from "../../Assets/timer.svg";
import check from "../../Assets/check.svg";
function Order() {
  const [orderId, setOrderId] = useState("PFKUESZ");
  const [address, setAddress] = useState(
    "bsldwklj3e3ljedkl2ej2pe9309djsklajdw93fu09jsdlk "
  );
  return (
    <div className="order">
      <div className="row-bought">
        <div className="buy-box">
          <div className="left-buy">
            <p>YOU SEND</p>
            <p className="sent">0.5000</p>
            <p className="address">
              bsldwklj3e3ljedkl2ej2pe9309djsklajdw93fu09jsdlk
            </p>
          </div>
          <FontAwesomeIcon className="orange-svg" icon={faBitcoin} />
        </div>
        <FontAwesomeIcon className="arrow" icon={faLongArrowRight} />
        <div className="buy-box buy-box2">
          <FontAwesomeIcon icon={faEthereum} />
          <div className="left-buy">
            <p>YOU RECEIVE</p>
            <p className="sent">7.1024</p>
            <p className="address">0sajkljdlwkjdlsjadowh389hdf49fh49fhdjkfds</p>
          </div>
        </div>
      </div>
      <div className="checkout-div">
        <div className="left-checkout">
          <div className="data-div">
            <p>Order ID</p>
            <h2
              className="pointer"
              onClick={() => navigator.clipboard.writeText(orderId)}
            >
              {orderId} <FontAwesomeIcon className="copy" icon={faCopy} />
            </h2>
          </div>
          <div className="data-div">
            <p>Send transaction by</p>
            <h2>29:48</h2>
          </div>
          <div className="data-div noBorder">
            <p>Creation Time</p>
            <h2 className="white">03/25/2020 3:44 PM</h2>
          </div>
        </div>
        <div className="right-checkout">
          <div className="part">
            <h2>
              Send <span className="orange-text">0.5 BTC</span> to the address:
            </h2>
            <p
              className="pointer"
              onClick={() => navigator.clipboard.writeText(address)}
            >
              {address}
              <FontAwesomeIcon className="copy" icon={faCopy} />
            </p>
          </div>
          <div className="part part2">
            <p>Send To:</p>
            <img src={Qr} alt="" />
          </div>
          <hr />
          <div className="part">
            <h2>Recieving address ETH</h2>
            <p>0xasdnfjkshfnk3hri3hbrhjk3bjh3b4jhb5k3jb</p>
          </div>
        </div>
      </div>
      <div className="progress-div">
        <div className="progress-part">
          <img src={card} alt="" />
          <p>Order Received</p>
        </div>
        <div className="line"></div>
        <div className="progress-part">
          <img src={timer} alt="" />
          <p>Anonymizing</p>
        </div>
        <div className="line"></div>
        <div className="progress-part">
          <img src={cloud} alt="" />
          <p>Sending to wallet</p>
        </div>
        <div className="line"></div>
        <div className="progress-part">
          <img src={check} alt="" />
          <p>Done</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
