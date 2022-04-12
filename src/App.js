import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
