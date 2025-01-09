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
