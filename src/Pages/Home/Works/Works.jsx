import React from "react";
import "./Works.css";
function Works() {
  return (
    <div id="how" className="works">
      <h1>HOW IT WORKS</h1>
      <div className="box-div">
        <div className="box">
          <p className="number">1</p>
          <p className="work-desc">
            SendGHOST anonymizes your crypto by exchanging to Monero on Exchange
            A
          </p>
        </div>
        <div className="box">
          <p className="number">2</p>
          <p className="work-desc">Send your anonymous Monero to Exchange B</p>
        </div>
        <div className="box">
          <p className="number">3</p>
          <p className="work-desc">
            Convert your Monero to your desired receiving currency on Exchange B
          </p>
        </div>
        <div className="box">
          <p className="number">4</p>
          <p className="work-desc">
            Send receiving currency to your desired wallet, breaking all links
            between the sender and receiver
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
