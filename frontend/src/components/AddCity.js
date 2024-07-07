import * as React from "react";
import { useState } from "react";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import { addCityAsync } from "../redux/citiesSlice";
import { useDispatch } from "react-redux";

const AddCity = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !country) {
      setError("Both fields are required.");
      return;
    }

    const data = { name, country };

    try {
      const resultAction = await dispatch(addCityAsync(data));
      if (addCityAsync.fulfilled.match(resultAction)) {
        setName("");
        setCountry("");
        setError(null);
        setSuccessMessage("City successfully added");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
        console.log("New city added", data);
      } else {
        setError(
          resultAction.error.message || "Failed to add city. Please try again."
        );
      }
    } catch (error) {
      setError("Failed to add city. Please try again.");
      console.error("Error adding city:", error);
    }
  };

  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Add a new city</h2>

        <Textarea
          placeholder="Enter city name"
          required
          sx={{ mb: 1 }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Textarea
          placeholder="Enter country"
          required
          sx={{ mb: 1 }}
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        {error && (
          <Alert color="danger" variant="soft" className="error-alert">
            {error}
          </Alert>
        )}
        {successMessage && (
          <Alert color="success" variant="soft" className="success-alert">
            {successMessage}
          </Alert>
        )}

        <Button
          type="submit"
          variant="solid"
          color="neutral"
          sx={{ width: "100%" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddCity;
