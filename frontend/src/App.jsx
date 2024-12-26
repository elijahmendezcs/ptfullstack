import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';
// import Card from "./components/Card";

// Pages
import About from "./pages/About";
import BookASession from "./pages/Book";
import Prints from "./pages/Prints";
import Family from "./pages/Family";
import Senior from "./pages/Senior";
import Landscape from "./pages/Landscape";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <MainPageImageList /> */}
        {/* <Card/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookasession" element={<BookASession />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/family" element={<Family />} />
          <Route path="/senior" element={<Senior />} />
          <Route path="/landscape" element={<Landscape />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
