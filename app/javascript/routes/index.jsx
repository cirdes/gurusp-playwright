import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Show from "../components/beers/Show";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/beers/:id" element={<Show/>} />
    </Routes>
  </Router>
);