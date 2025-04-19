import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import AddItineraryModal from "./AddItineraryModal";

const AddItinerary = ({ city }) => {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {auth.isAuthenticated && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            style={{ width: "200px", margin: "1rem 0" }}
          >
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
