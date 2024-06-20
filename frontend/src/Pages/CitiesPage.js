import React from "react";
import { Container } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import CitiesText from "../components/CitiesText";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import AddCity from "../components/AddCity";
import { fetchAllCities } from "../services/servicesCity";

const CitiesPage = () => {
  const { cities, loading, error, refetch } = useCityData();

  const handleCityAdded = () => {
    refetch();
  };

  return (
    <div className="cities-page">
      <Container className="cities-page-container">
        <CitiesText />
        <CitiesInput
          cities={cities}
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
