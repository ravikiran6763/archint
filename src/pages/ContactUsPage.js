// src/components/ContactUs.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <Typography variant="h2">Contact Us Page</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <TextField
          label="Requirement"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
