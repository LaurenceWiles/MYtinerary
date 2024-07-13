import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

const LoginForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const { email, password } = formData;

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
    </Box>
  );
};

export default LoginForm;
