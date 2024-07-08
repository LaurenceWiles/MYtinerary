import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCities } from "../redux/citiesSlice";

const useCityData = () => {
  const dispatch = useDispatch();
  const cityState = useSelector((state) => state.cities);
  const { list, loading, error } = cityState;

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const refetch = () => {
    dispatch(fetchCities());
  };

  return { list, loading, error, refetch };
};

export default useCityData;
