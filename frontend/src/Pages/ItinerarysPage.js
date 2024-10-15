import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import useItineraryData from "../hooks/useItineraryData";
import {
  Container,
  Grid,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import ItineraryCard from "../components/itineraryCard";
import AddItineraryModal from "../components/AddItineraryModal";
import { useSelector } from "react-redux";

const ItinerarysPage = () => {
  const { city } = useParams();
  const { list, loading, error } = useItineraryData(city);
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="itineraries-page text-center">
      <Container className="itineraries-page-container">
        <Typography variant="h4" gutterBottom>
          {decodeURIComponent(city)}
        </Typography>
        {auth.isAuthenticated && (
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New Itinerary
          </Button>
        )}

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
      <AddItineraryModal open={open} handleClose={handleClose} city={city} />
    </div>
  );
};

export default ItinerarysPage;
