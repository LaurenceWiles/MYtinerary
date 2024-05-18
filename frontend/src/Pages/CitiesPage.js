import React, { useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import CitiesText from "../components/CitiesText";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import { useDebounce } from "use-debounce";
import AddCity from "../components/AddCity";

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
