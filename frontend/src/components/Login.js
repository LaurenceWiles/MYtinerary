import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/joy/Button";
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import { parseQueryParams } from "../hooks/useParseQueryParams";

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

      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        fullWidth
        maxWidth="xs"
        aria-labelledby="auth-dialog-title"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {modalContent === "login" ? "Log In" : "Create Account"}
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {modalContent === "login" && (
            <LoginForm closeModal={closeModal} authError={authError} />
          )}
          {modalContent === "register" && (
            <CreateAccountForm closeModal={closeModal} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
