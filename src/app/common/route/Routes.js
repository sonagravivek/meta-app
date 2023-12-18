import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Help from "../../pages/help/Help";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/help" element={<Help />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default Routing;
