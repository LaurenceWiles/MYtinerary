import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import useItineraryData from "../hooks/useItineraryData";
import {
  Container,
  Grid,
  CircularProgress,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ItineraryCard from "../components/ItineraryCard";
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
        <Stack spacing={1} sx={{ mb: 2, alignItems: "center" }}>
          <AddItinerary city={city} />
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/cities-page"
            style={{ width: "200px" }}
          >
            Back to Cities
          </Button>
        </Stack>
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
