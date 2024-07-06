import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchAllCities } from "../services/servicesCity";

const useCityData = () => {
  const cityState = useSelector((state) => state.cities);
  const { list, loading, error } = cityState;

  useEffect(() => {
    fetchAllCities();
  }, [cityState]);

  const refetch = () => {
    fetchAllCities();
  };

  return { list, loading, error, refetch };
};

export default useCityData;
