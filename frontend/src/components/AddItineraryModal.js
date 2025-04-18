import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import useUpdateItineraryData from "../hooks/useUpdateItineraryData";

const AddItineraryModal = ({ open, handleClose, city }) => {
  const { addItinerary } = useUpdateItineraryData();
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    price: "",
    rating: "",
    hashtags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const formDataWithCity = { ...formData, city };
    const success = await addItinerary(formDataWithCity);
    if (success) {
      handleClose();
      setFormData({
        title: "",
        duration: "",
        price: "",
        rating: "",
        hashtags: "",
      });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Itinerary</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Hashtags (comma separated)"
          name="hashtags"
          value={formData.hashtags}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItineraryModal;
