import React from "react";
import "./Home.css";
import Exchanger from "./Exchanger/Exchanger";
import Works from "./Works/Works";
import Why from "./Why/Why";
import Footer from "../../Layout/Footer/Footer";
function Home() {
  return (
    <div className="home">
      <Exchanger />
      <Works />
      <Why />
      <Footer />
    </div>
  );
}

export default Home;
