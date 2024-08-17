import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import CitiesPage from "./Pages/CitiesPage";
import ItinerarysPage from "./Pages/ItinerarysPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cities-page" element={<CitiesPage />} />
      <Route path="/itineraries/:city" element={<ItinerarysPage />} />
    </Routes>
  );
}

export default App;
