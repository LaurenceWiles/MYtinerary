import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItineraryAsync } from "../redux/itinerariesSlice";

const useUpdateItineraryData = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const addItinerary = async (data) => {
    try {
      const resultAction = await dispatch(addItineraryAsync(data));
      if (addItineraryAsync.fulfilled.match(resultAction)) {
        setError(null);
        return true;
      } else {
        setError(resultAction.error.message || "Failed to add itinerary.");
        return false;
      }
    } catch (error) {
      setError("Failed to add itinerary. Please try again.");
      console.error("Error adding itinerary:", error);
      return false;
    }
  };

  return {
    addItinerary,
    error,
  };
};

export default useUpdateItineraryData;