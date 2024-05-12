import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import Footer from "../components/Footer";

const CitiesPage = () => {
  const [cities, setCities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("http://localhost:4000/cities/all");
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        const json = await response.json();
        setCities(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCities();
  }, []);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredCities = filter
    ? cities.filter((city) =>
        city.name.toLowerCase().startsWith(filter.toLowerCase())
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
            {filteredCities.map((city) => (
              <p key={city._id}>{city.name}</p>
            ))}
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default CitiesPage;
