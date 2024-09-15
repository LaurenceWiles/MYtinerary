const apiURL = "http://localhost:4000/";

export const fetchItinerariesByCity = async (cityName) => {
  const response = await fetch(
    apiURL + `itineraries?city=${encodeURIComponent(cityName)}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch itineraries");
  }
  const data = await response.json();
  return data;
};