import React from "react";
import { useParams } from "react-router-dom";

const ItinerarysPage = () => {
  const { city } = useParams();

  return (
    <div>
      <h1>{decodeURIComponent(city)}</h1>
    </div>
  );
};

export default ItinerarysPage;
