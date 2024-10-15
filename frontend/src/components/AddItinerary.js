import React, { useState } from "react";
import { Button } from "@mui/material";
import AddItineraryModal from "./AddItineraryModal";
import { useSelector } from "react-redux";

const AddItinerary = ({ city }) => {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {auth.isAuthenticated && (
        <>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New Itinerary
          </Button>
          <AddItineraryModal
            open={open}
            handleClose={handleClose}
            city={city}
          />
        </>
      )}
    </>
  );
};

export default AddItinerary;
