import React from "react";
import "./Home.css";
import Exchanger from "./Exchanger/Exchanger";
import Works from "./Works/Works";
import Why from "./Why/Why";
function Home() {
  return (
    <div className="home">
      <Exchanger />
      <Works />
      <Why />
    </div>
  );
}

export default Home;
