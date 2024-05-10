import React from "react";
import { useEffect, useState } from "react";

const CitiesPage = () => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("http://localhost:4000/cities/all");
      const json = await response.json();

      if (response.ok) {
        setCities(json);
      }
    };
    fetchCities();
  }, []);

  return (
    <div>
      {cities && cities.map((city) => <p key={city._id}>{city.name}</p>)}
    </div>
  );
};

export default CitiesPage;
