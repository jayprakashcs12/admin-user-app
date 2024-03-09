import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import NotFound from "./components/Pages/NotFound";

function App() {

  let location = useLocation();

  return (
    <React.Fragment>
      {location.path !== '*' && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;