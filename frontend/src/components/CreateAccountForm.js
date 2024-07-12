import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

const CreateAccountForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      setSuccess(res.data.msg);
      setErrors([]);
      closeModal();
    } catch (err) {
      setErrors(err.response.data.errors || []);
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
      <h2>Create Account</h2>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error.msg}
            </p>
          ))}
        </div>
      )}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={onSubmit}>
        <Textarea
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
          sx={{ mb: 1 }}
        />
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
        <Textarea
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="Confirm Password"
          required
          sx={{ mb: 1 }}
        />
        <Button
          type="submit"
          variant="solid"
          color="neutral"
          sx={{ width: "100%" }}
        >
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default CreateAccountForm;
