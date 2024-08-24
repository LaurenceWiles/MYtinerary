import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useItineraryData from "../hooks/useItineraryData";

const ItinerarysPage = () => {
  const { city } = useParams();
  const cityName = decodeURIComponent(city);
  const { list, loading, error } = useItineraryData(cityName);

  useEffect(() => {
    if (list && list.length > 0) {
      list.forEach((itinerary) => {
        console.log(
          "Hashtags for itinerary:",
          itinerary._id,
          itinerary.hashtags
        );
      });
    }
  }, [list]);

  return (
    <div className="itineraries-page text-center">
      <h1 className="itineraries-page-header">{cityName}</h1>
      <p>Itineraries for {cityName}:</p>
      {loading && <p>Loading itineraries...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && list.length === 0 && (
        <p>No itineraries found for {cityName}.</p>
      )}

      <ul>
        {list.map((itinerary) => (
          <li key={itinerary._id}>
            <h3>{itinerary.title}</h3>
            <p>Duration: {itinerary.duration} hours</p>
            <p>Price: ${itinerary.price}</p>
            <p>Rating: {itinerary.rating.$numberDecimal}</p>
            <p>
              Hashtags:{" "}
              {itinerary.hashtags && itinerary.hashtags.length > 0
                ? itinerary.hashtags.join(", ")
                : "No hashtags available"}
            </p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ItinerarysPage;
