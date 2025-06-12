import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Headers";
import Footers from "./components/Footers/Footers";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Places from "./pages/Travel/Places";
import Vlog from "./pages/Vlog/Vlog";
import ContactUs from "./pages/Contact Us/ContactUs";

function App() {
  return (
    <Router>
      <div className="app">
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
