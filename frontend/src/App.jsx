import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import About from "./pages/About";
import Prints from "./pages/Prints";
import Landscape from "./pages/Landscape";
import Home from "./pages/Home";
import BWPage from "./pages/BWListings/BWPage1";
import BWPage2 from "./pages/BWListings/BWPage2";
import BWPage3 from "./pages/BWListings/BWPage3";
import BWPage4 from "./pages/BWListings/BWPage4";
import BWPage5 from "./pages/BWListings/BWPage5";
import BWPage6 from "./pages/BWListings/BWPage6";
import BWPage7 from "./pages/BWListings/BWPage7";
import BWPage8 from "./pages/BWListings/BWPage8";
import BWPage11 from "./pages/BWListings/BWPage11";
import BWPage12 from "./pages/BWListings/BWPage12";
import BWPage13 from "./pages/BWListings/BWPage13";
import BWPage14 from "./pages/BWListings/BWPage14";
import ArchPage1 from "./pages/ArchListings/ArchPage1";
import ArchPage2 from "./pages/ArchListings/ArchPage2";
import ArchPage3 from "./pages/ArchListings/ArchPage3";
import ArchPage4 from "./pages/ArchListings/ArchPage4";
import ArchPage5 from "./pages/ArchListings/ArchPage5";
import ArchPage6 from "./pages/ArchListings/ArchPage6";
import ArchPage7 from "./pages/ArchListings/ArchPage7";
import ArchPage8 from "./pages/ArchListings/ArchPage8";
import ArchPage9 from "./pages/ArchListings/ArchPage9";
import ThankYou from "./pages/ThankYou";
import Cancel from "./pages/Cancel";
import Architecture from "./pages/Architecture";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={700}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="prints/bwpage" element={<BWPage />} />
          <Route path="prints/bwpage2" element={<BWPage2 />} />
          <Route path="prints/bwpage3" element={<BWPage3 />} />
          <Route path="prints/bwpage4" element={<BWPage4 />} />
          <Route path="prints/bwpage5" element={<BWPage5 />} />
          <Route path="prints/bwpage6" element={<BWPage6 />} />
          <Route path="prints/bwpage7" element={<BWPage7 />} />
          <Route path="prints/bwpage8" element={<BWPage8 />} />
          <Route path="prints/bwpage11" element={<BWPage11 />} />
          <Route path="prints/bwpage12" element={<BWPage12 />} />
          <Route path="prints/bwpage13" element={<BWPage13 />} />
          <Route path="prints/bwpage14" element={<BWPage14 />} />
          <Route path="prints/archpage1" element={<ArchPage1 />} />
          <Route path="prints/archpage2" element={<ArchPage2 />} />
          <Route path="prints/archpage3" element={<ArchPage3 />} />
          <Route path="prints/archpage4" element={<ArchPage4 />} />
          <Route path="prints/archpage5" element={<ArchPage5 />} />
          <Route path="prints/archpage6" element={<ArchPage6 />} />
          <Route path="prints/archpage7" element={<ArchPage7 />} />
          <Route path="prints/archpage8" element={<ArchPage8 />} />
          <Route path="prints/archpage9" element={<ArchPage9 />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
