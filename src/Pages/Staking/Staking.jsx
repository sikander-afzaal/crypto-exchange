import React, { useState } from "react";
import "./Staking.css";
import connect from "../../Assets/connect.svg";
import meta from "../../Assets/meta.svg";
function Staking() {
  const [open, setOpen] = useState(false);
  return (
    <div className="staking">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`overlay ${open ? "display-flex" : ""}`}
      ></div>
      <div className={`pop-up ${open ? "display-flex" : ""}`}>
        <div className="pop">
          <img src={meta} alt="" />
          <h2>MetaMask</h2>
        </div>
        <div className="pop">
          <img src={connect} alt="" />
          <h2>Wallet Connect</h2>
        </div>
      </div>
      <button onClick={() => setOpen(true)} className="connect">
        Connect
      </button>
      <div className="top-staking">
        <h1>Stake $POOF</h1>
        <p>
          Stake $POOF to earn $BUSD and more $POOF. HoudiniSwap fees collected
          in $BUSD will be paid bi-weekly on a prorated basis to Stakers based
          on their % ownership of the pool. The longer you lock your $POOF, the
          greater your $POOF yield.
        </p>
        <div className="staking-box-div">
          <div className="stake-box">
            <div>
              <p>20% $BUSD Pool</p>
              <p>5% $POOF APY</p>
            </div>
            <button>14 days</button>
          </div>
          <div className="stake-box">
            <div>
              <p>30% $BUSD Pool</p>
              <p>20% $POOF APY</p>
            </div>
            <button>28 days</button>
          </div>
          <div className="stake-box">
            <div>
              <p>50% $BUSD Pool</p>
              <p>65% $POOF APY</p>
            </div>
            <button>70 days</button>
          </div>
        </div>
        <input type="number" className="staking-input" placeholder="0" />
        <div className="stake-row">
          <h2 style={{ color: "white" }}>TOTAL AMOUNT</h2>
          <p style={{ opacity: "1" }}>0</p>
        </div>
        <div className="stake-row">
          <h2>PERIOD</h2>
          <p>7 Days</p>
        </div>
        <div className="stake-row">
          <h2>$POOF APY</h2>
          <p>5%</p>
        </div>
        <div className="stake-row">
          <h2>$BUSD Pool Participation</h2>
          <p>0</p>
        </div>
        <div className="stake-row">
          <h2>ESTIMATED YEARLY EARNINGS</h2>
          <p>0.00 $POOF</p>
        </div>
        <div className="stake-row">
          <h2>REDEMPTION DATE</h2>
          <p>13/06/2022, 18:35:52</p>
        </div>
        <button className="approve">Approve</button>
      </div>
      <div className="bottom-staking">
        <div className="staking-box-div">
          <div className="stake-box">
            <h2>$DREAM STAKED</h2>
            <p>0.00</p>
          </div>
          <div className="stake-box">
            <h2>$DREAM EARNINGS</h2>
            <p>0.00</p>
          </div>
        </div>
        <input
          disabled={true}
          type="number"
          className="staking-input"
          placeholder="Your Staked Holdings (0)"
        />
        <div className="approve">REDEEM</div>
      </div>
    </div>
  );
}

export default Staking;
