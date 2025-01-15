import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import Button from "@mui/joy/Button";
import { parseQueryParams } from "../hooks/useParseQueryParams";

Modal.setAppElement("#root");

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const { error } = parseQueryParams();
    if (error) {
      setAuthError(error);
      setModalContent("login");
      setModalIsOpen(true);
    }
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
    setAuthError(null);
    window.history.replaceState({}, document.title, "/");
  };

  return (
    <div>
      <p className="text-center">Want to build your own MYtinerary?</p>
      <ul className="login-list">
        <li>
          <Button
            onClick={() => openModal("login")}
            variant="soft"
            color="primary"
          >
            Log in
          </Button>
        </li>
        <li>
          <Button
            onClick={() => openModal("register")}
            variant="soft"
            color="primary"
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
        {modalContent === "login" && (
          <LoginForm closeModal={closeModal} authError={authError} />
        )}
        {modalContent === "register" && (
          <CreateAccountForm closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Login;
