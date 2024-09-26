import React, { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import useUpdateItineraryData from "../hooks/useUpdateItineraryData";

const AddItinerary = ({ city }) => {
  const { addItinerary, error, successMessage } = useUpdateItineraryData();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !duration || !price || !rating || !hashtags) {
      setLocalError("All fields are required.");
      return;
    }

    const itineraryData = {
      city,
      title,
      duration,
      price: parseFloat(price),
      rating: parseFloat(rating),
      hashtags: hashtags.split(",").map((tag) => tag.trim()),
    };

    const success = await addItinerary(itineraryData);
    if (success) {
      setTitle("");
      setDuration("");
      setPrice("");
      setRating("");
      setHashtags("");
      setLocalError("");
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add a New Itinerary
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Duration (in days)"
          fullWidth
          margin="normal"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <TextField
          label="Price (USD)"
          fullWidth
          margin="normal"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Rating (1-5)"
          fullWidth
          margin="normal"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <TextField
          label="Hashtags (comma-separated)"
          fullWidth
          margin="normal"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />
        {localError && <Alert severity="error">{localError}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddItinerary;
