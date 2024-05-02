import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
