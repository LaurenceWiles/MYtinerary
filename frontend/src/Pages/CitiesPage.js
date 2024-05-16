import React, { useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import { useDebounce } from "use-debounce";
import AddCity from "../components/AddCity";

const CitiesPage = () => {
  const { cities, loading, error, refetch } = useCityData();
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 500);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleCityAdded = () => {
    refetch();
  };

  const filteredCities = filter
    ? cities.filter((city) =>
        city.name.toLowerCase().startsWith(debouncedFilter.toLowerCase())
      )
    : [];

  return (
    <div className="cities-page">
      <Container className="citiespage-container">
        <h1 className="text-center cities-header">Find your city</h1>
        <div className="input-container">
          <CitiesInput onChange={handleFilterChange} />
          <div className="filtered-cities">
            {loading && <Spinner animation="border" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && filteredCities.length === 0 && debouncedFilter && (
              <p>No cities found.</p>
            )}
            {filteredCities.map((city) => (
              <p key={city._id}>{city.name}</p>
            ))}
          </div>
        </div>
        <AddCity onCityAdded={handleCityAdded} />
        <Footer />
      </Container>
    </div>
  );
};

export default CitiesPage;
