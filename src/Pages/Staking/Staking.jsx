import React from "react";
import "./Staking.css";
function Staking() {
  return (
    <div className="staking">
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
    </div>
  );
}

export default Staking;
