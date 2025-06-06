import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Footers from "./components/Footers/Footers";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
