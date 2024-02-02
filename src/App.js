// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Button,
  CssBaseline,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import ContactUs from "./pages/ContactUsPage";
import "./App.css";
import logo from "./assets/download.jpeg";

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={toggleMenu}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className="spacer" />
          <Link to="/" className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <div>
          <List>
            <ListItem button component={Link} to="/" onClick={toggleMenu}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleMenu}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/projects"
              onClick={toggleMenu}
            >
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact-us"
              onClick={toggleMenu}
            >
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
          <Divider />
          {/* Additional menu items or social links can be added here */}
        </div>
      </Drawer>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Container>

      {/* Footer */}
      <Container component="footer" className="footer">
        <div className="social-links">
          <a
            href="#your-facebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook-icon.png" alt="Facebook" />
          </a>
          <a
            href="#your-twitter-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media links as needed */}
        </div>
        <Typography>&copy; 2024 Your Company. All rights reserved.</Typography>
      </Container>
    </Router>
  );
};

export default App;
