import { useSelector } from "react-redux";
import CitiesInput from "../components/CitiesInput";
import CitiesText from "../components/CitiesText";
import Footer from "../components/Footer";
import useCityData from "../hooks/useCityData";
import AddCity from "../components/AddCity";

const CitiesPage = () => {
  const { list, loading, error } = useCityData();
  const auth = useSelector((state) => state.auth);

  return (
    <div className="cities-page">
      <div className="cities-page-container">
        <CitiesText />
        <CitiesInput
          cities={list}
          loading={loading}
          error={error}
          onChange={() => {}}
        />
        {auth.isAuthenticated && <AddCity />}
        <Footer />
      </div>
    </div>
  );
};

export default CitiesPage;
