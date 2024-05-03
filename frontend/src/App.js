import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import CitiesPage from "./Pages/CitiesPage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cities-page" element={<CitiesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
    </Routes>
  );
}

export default App;
