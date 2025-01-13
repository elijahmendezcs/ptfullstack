import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import About from "./pages/About";
import Prints from "./pages/Prints";
import BlackAndWhites from "./pages/BlackAndWhites";
import Hues from "./pages/Hues";
import Home from "./pages/Home";
import Urban from "./pages/Urban"
import BWPage from "./pages/BWListings/BWPage1";
import BWPage2 from "./pages/BWListings/BWPage2";
import BWPage3 from "./pages/BWListings/BWPage3";
import BWPage4 from "./pages/BWListings/BWPage4";
import BWPage5 from "./pages/BWListings/BWPage5";
import BWPage6 from "./pages/BWListings/BWPage6";
import BWPage7 from "./pages/BWListings/BWPage7";
import BWPage8 from "./pages/BWListings/BWPage8";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={700}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/blackandwhites" element={<BlackAndWhites />} />
          <Route path="/hues" element={<Hues />} />
          <Route path="/urban" element={<Urban />} />
          <Route path="prints/bwpage" element={<BWPage />} />
          <Route path="prints/bwpage2" element={<BWPage2 />} />
          <Route path="prints/bwpage3" element={<BWPage3 />} />
          <Route path="prints/bwpage4" element={<BWPage4 />} />
          <Route path="prints/bwpage5" element={<BWPage5 />} />
          <Route path="prints/bwpage6" element={<BWPage6 />} />
          <Route path="prints/bwpage7" element={<BWPage7 />} />
          <Route path="prints/bwpage8" element={<BWPage8 />} />
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
