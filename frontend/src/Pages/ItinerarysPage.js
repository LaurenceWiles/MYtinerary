import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const ItinerarysPage = () => {
  const { city } = useParams();

  return (
    <div className="itineraries-page">
      <h1 className="text-center itineraries-page-header">
        {decodeURIComponent(city)}
      </h1>
      <p className="text-center">Itineraries for {decodeURIComponent(city)}</p>
      <Footer />
    </div>
  );
};

export default ItinerarysPage;
