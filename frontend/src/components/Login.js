import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import Button from "@mui/joy/Button";

Modal.setAppElement("#root");

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  return (
    <div>
      <p className="text-center">Want to build your own MYtinerary?</p>
      <ul className="login-list">
        <li>
          <Button
            onClick={() => openModal("login")}
            variant="outlined"
            color="neutral"
          >
            Log in
          </Button>
        </li>
        <li>
          <Button
            onClick={() => openModal("register")}
            variant="outlined"
            color="neutral"
          >
            Create Account
          </Button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Auth Modal"
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
        {modalContent === "login" && <LoginForm closeModal={closeModal} />}
        {modalContent === "register" && (
          <CreateAccountForm closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Login;
