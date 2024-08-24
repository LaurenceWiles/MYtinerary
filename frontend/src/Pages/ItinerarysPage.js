import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useItineraryData from "../hooks/useItineraryData";
import { Container, Grid, CircularProgress, Typography } from "@mui/material";
import ItineraryCard from "../components/itineraryCard";

const ItinerarysPage = () => {
  const { city } = useParams();
  const { list, loading, error } = useItineraryData(city);

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error loading itineraries</Typography>;
  if (list.length === 0)
    return (
      <Typography>
        No itineraries found for {decodeURIComponent(city)}
      </Typography>
    );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Itineraries for {decodeURIComponent(city)}
      </Typography>
      <Grid container spacing={2}>
        {list.map((itinerary) => (
          <Grid item xs={12} sm={6} md={4} key={itinerary._id}>
            <ItineraryCard itinerary={itinerary} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
};

export default ItinerarysPage;
