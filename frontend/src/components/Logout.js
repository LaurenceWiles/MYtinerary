import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import Button from "@mui/joy/Button";
import { logout } from "../redux/authSlice";

const Logout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    closeModal();
  };

  return (
    <div>
      <Button
        onClick={openModal}
        variant="soft"
        color="primary"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      >
        Log out
      </Button>

      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="logout-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="logout-dialog-title" sx={{ textAlign: "center" }}>
          Are you sure you want to log out?
        </DialogTitle>

        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <MuiButton onClick={handleLogout} color="primary" variant="contained">
            Logout
          </MuiButton>
          <MuiButton onClick={closeModal} color="inherit" variant="outlined">
            Cancel
          </MuiButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Logout;
