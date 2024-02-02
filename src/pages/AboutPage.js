// src/components/About.js
import React from "react";
import { Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const About = () => {
  return (
    <Container>
      <StyledPaper elevation={3}>
        <Typography variant="h2" gutterBottom>
          About Page
        </Typography>
        <Typography variant="body1">
          Welcome to our company! We are dedicated to delivering high-quality
          products/services to our customers. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla facilisi. Sed sit amet justo vitae
          lacus feugiat consectetur.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team consists of talented professionals who are passionate about
          what they do. We strive for excellence in every project and aim to
          exceed our clients' expectations.
        </Typography>
        {/* Add more content as needed */}
      </StyledPaper>
    </Container>
  );
};

export default About;
