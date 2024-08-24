import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItineraries } from "../redux/itinerariesSlice";

const useItineraryData = (cityName) => {
  const dispatch = useDispatch();
  const itineraryState = useSelector((state) => state.itineraries);
  const { list, loading, error } = itineraryState;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchItineraries(cityName));
    }
  }, [cityName, dispatch]);

  return { list, loading, error };
};

export default useItineraryData;
