import { useEffect } from "react";
import { Container } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import CitiesText from "../components/CitiesText";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import AddCity from "../components/AddCity";
import { fetchAllCities } from "../services/servicesCity";
import { useDispatch } from "react-redux";

const CitiesPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error, refetch } = useCityData();

  const handleCityAdded = (e) => {
    e.preventDefault();
    refetch();
    //useDispatch(addCity(list));
  };
  useEffect(() => {
    dispatch(fetchAllCities());
  }, [dispatch]);

  return (
    <div className="cities-page">
      <Container className="cities-page-container">
        <CitiesText />
        <CitiesInput
          cities={list}
          loading={loading}
          error={error}
          onChange={() => {}}
        />
        <AddCity onCityAdded={handleCityAdded} />
        <Footer />
      </Container>
    </div>
  );
};

export default CitiesPage;
