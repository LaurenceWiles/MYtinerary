import * as React from "react";
import { useState } from "react";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import useUpdateCityData from "../hooks/useUpdateCityData";

const AddCity = () => {
  const { addCity, error, successMessage } = useUpdateCityData();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !country) {
      setLocalError("Both fields are required.");
      return;
    }

    const data = { name, country };
    const success = await addCity(data);
    if (success) {
      setName("");
      setCountry("");
      setLocalError("");
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
            sx={{ width: "100%" }}
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
