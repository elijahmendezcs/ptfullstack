import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import About from "./pages/About";
import BookASession from "./pages/Book";
import Prints from "./pages/Prints";
import BlackAndWhites from "./pages/BlackAndWhites";
import Hues from "./pages/Hues";
import Collections from "./pages/Collections";
import Home from "./pages/Home";

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
          <Route path="/collections" element={<Collections />} />
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
