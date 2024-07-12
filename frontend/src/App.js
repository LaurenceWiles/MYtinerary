import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import CitiesPage from "./Pages/CitiesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cities-page" element={<CitiesPage />} />
    </Routes>
  );
}

export default App;
