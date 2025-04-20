import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import CitiesPage from "./pages/CitiesPage";
import ItinerarysPage from "./pages/ItinerarysPage";

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
