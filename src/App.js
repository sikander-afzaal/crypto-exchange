import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Staking from "./Pages/Staking/Staking";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Staking" element={<Staking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
