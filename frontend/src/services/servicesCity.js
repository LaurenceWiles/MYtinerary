const apiURL = "https//localhost:4000/";

export const fetchAllCities = async () => {
  const response = await fetch(apiURL + "cities/all", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch cities");
  }
  const data = await response.json();
  return data;
};

export const postCityDB = async (city) => {
  const response = await fetch(apiURL + "cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city),
  });
  if (!response.ok) {
    throw new Error("Failed to add city");
  }
  const data = await response.json();
  return data;
};

export const editCityDB = async (city) => {
  const response = await fetch(apiURL + `cities/${city._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(city),
  });
  if (!response.ok) {
    throw new Error("Failed to edit city");
  }
  const data = await response.json();
  return data;
};

export const deleteCityDB = async (cityId) => {
  const response = await fetch(apiURL + `cities/${cityId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete city");
  }
  return cityId;
};
