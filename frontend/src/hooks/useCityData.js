import { useState, useEffect } from "react";

const useCityData = () => {
  const [cities, setCities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchCities();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchCities();
  };

  return { cities, loading, error, refetch };
};

export default useCityData;
