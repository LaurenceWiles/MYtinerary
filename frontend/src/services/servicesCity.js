import { setCities } from "../redux/citiesSlice";

const apiURL = "http://localhost:4000/cities/";

export const fetchAllCities = () => async (dispatch) => {
  try {
    const response = await fetch(apiURL + "all", { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch cities");
    }
    const data = await response.json();
    dispatch(setCities(data));
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};

export const postCityDB = async (data) => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to post city");
    }
  } catch (error) {
    console.error("Error posting city:", error);
  }
};

export const deleteCityDB = async (id) => {
  try {
    const response = await fetch(apiURL + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete city");
    }
  } catch (error) {
    console.error("Error deleting city:", error);
  }
};

export const editCityDB = async (id, data) => {
  try {
    const response = await fetch(apiURL + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to edit city");
    }
  } catch (error) {
    console.error("Error editing city:", error);
  }
};
