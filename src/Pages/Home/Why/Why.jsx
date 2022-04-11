import React from "react";
import "./Why.css";
import eclipse from "../../../Assets/eclipse.png";
import sqr from "../../../Assets/why.png";
function Why() {
  return (
    <div className="why">
      <div className="top-why why-sect">
        <div className="left-why">
          <img src={eclipse} alt="" />
        </div>
        <div className="right-why">
          <h1>WHY THIS WORKS</h1>
          <p>
            When a Monero transaction is sent, there is no way to see the
            sending party, receiving party, nor the transaction value. By
            sending Monero from one exchange to another, it vanishes from the
            ledger, then suddenly reappears to a new exchange that has no tie to
            the former.
          </p>
        </div>
      </div>
      <div className="bottom-why why-sect">
        <div className="left-why">
          <img src={sqr} alt="" />
        </div>
        <div className="right-why">
          <h1>Why we built this</h1>
          <p>
            Decentralization and anonymity should go hand-in-hand. Why should
            everyone be able to track where you earn your money and where it is
            spent? If you want to send someone money, why should they know
            everything about your net worth? SendGHOST makes it easy to send
            transactions in any currency without worrying about nosy receivers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
