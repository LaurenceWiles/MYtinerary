import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import GoogleButton from "react-google-button";

const LoginForm = ({ closeModal, authError }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const { email, password } = formData;

  useEffect(() => {
    if (authError) {
      setErrorMessage(authError);
    }
  }, [authError]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login(formData));
    if (login.fulfilled.match(result)) {
      closeModal();
    }
  };

  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <h2>Log in</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={onSubmit}>
        <Textarea
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
          sx={{ mb: 1 }}
        />
        <Textarea
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
          sx={{ mb: 1 }}
        />
        <Button
          type="submit"
          variant="solid"
          color="primary"
          sx={{ width: "100%" }}
        >
          Login
        </Button>
      </form>
      <p>Or</p>
      <GoogleButton
        onClick={() => {
          window.location.href = "http://localhost:4000/users/auth/google";
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          window.location.href = "http://localhost:4000/users/auth/twitter";
        }}
        sx={{ mt: 1, width: "100%" }}
      >
        Sign in with Twitter
      </Button>
    </Box>
  );
};

export default LoginForm;
