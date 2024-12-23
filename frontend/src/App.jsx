import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';
// import Card from "./components/Card";

// Pages
import About from "./pages/About";
import BookASession from "./pages/Book";
import Events from "./pages/Events";
import Family from "./pages/Family";
import Senior from "./pages/Senior";
import Wedding from "./pages/Wedding";
import MainPageImageList from "./components/MainPageImageList";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <MainPageImageList /> */}
        {/* <Card/> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/bookasession" element={<BookASession />} />
          <Route path="/events" element={<Events />} />
          <Route path="/family" element={<Family />} />
          <Route path="/senior" element={<Senior />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
