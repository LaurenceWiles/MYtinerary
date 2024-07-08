import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCityAsync } from "../redux/citiesSlice";

const useUpdateCityData = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const addCity = async (data) => {
    try {
      const resultAction = await dispatch(addCityAsync(data));
      if (addCityAsync.fulfilled.match(resultAction)) {
        setError(null);
        setSuccessMessage("City successfully added");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        return true;
      } else {
        setError(
          resultAction.error.message || "Failed to add city. Please try again."
        );
        return false;
      }
    } catch (error) {
      setError("Failed to add city. Please try again.");
      console.error("Error adding city:", error);
      return false;
    }
  };

  return {
    addCity,
    error,
    successMessage,
  };
};

export default useUpdateCityData;
