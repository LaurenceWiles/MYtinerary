import { Container } from "react-bootstrap";
import CitiesInput from "../components/CitiesInput";
import CitiesText from "../components/CitiesText";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import AddCity from "../components/AddCity";

const CitiesPage = () => {
  const { list, loading, error } = useCityData();

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
        <AddCity />
        <Footer />
      </Container>
    </div>
  );
};

export default CitiesPage;
