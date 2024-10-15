import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useItineraryData from "../hooks/useItineraryData";
import { Container, Grid, CircularProgress, Typography } from "@mui/material";
import ItineraryCard from "../components/itineraryCard";
import AddItinerary from "../components/AddItinerary";

const ItinerarysPage = () => {
  const { city } = useParams();
  const { list, loading, error } = useItineraryData(city);

  return (
    <div className="itineraries-page text-center">
      <Container className="itineraries-page-container">
        <Typography variant="h4" gutterBottom>
          {decodeURIComponent(city)}
        </Typography>
        <AddItinerary city={city} />

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">Error loading itineraries</Typography>
        ) : list.length === 0 ? (
          <Typography>
            No itineraries yet for {decodeURIComponent(city)}
          </Typography>
        ) : (
          <>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              {list.map((itinerary) => (
                <Grid item xs={12} sm={6} md={4} key={itinerary._id}>
                  <ItineraryCard itinerary={itinerary} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default ItinerarysPage;
