import * as React from "react";
import { useState } from "react";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

const AddCity = ({ onCityAdded }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const city = { name, country, img };

    try {
      const response = await fetch("http://localhost:4000/cities/all", {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add city");
      }

      setName("");
      setCountry("");
      setImg("");
      setError(null);

      onCityAdded();
      setSuccessMessage("City successfully added");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      console.log("new city added", city);
    } catch (error) {
      setError(error.message);
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
        <Textarea
          placeholder="Upload a picture"
          sx={{ mb: 1 }}
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />
        {successMessage && (
          <Alert color="success" variant="soft" className="success-alert">
            {successMessage}
          </Alert>
        )}
        <Button
          type="submit"
          variant="soft"
          color="primary"
          sx={{ width: "100%" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddCity;
