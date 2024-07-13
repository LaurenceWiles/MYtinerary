import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import Button from "@mui/joy/Button";
import { logout } from "../redux/authSlice";

Modal.setAppElement("#root");

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
        onClick={() => openModal("login")}
        variant="soft"
        color="primary"
        style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}
      >
        Log out
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Logout Confirmation Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            padding: "20px",
            borderRadius: "8px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2>Are you sure?</h2>
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleLogout}>Logout</Button>
          <Button onClick={closeModal} style={{ marginLeft: "10px" }}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Logout;
