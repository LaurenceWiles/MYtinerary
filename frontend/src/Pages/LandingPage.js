import React from "react";
import LandingLogo from "../components/LandingLogo";
import LandingP from "../components/LandingP";
import { Container } from "react-bootstrap";
import BrowseCitiesLink from "../components/BrowseCitiesLink";
import Login from "../components/Login";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <LandingLogo />
      <Container className="content-container">
        <div className="content">
          <LandingP />
          <BrowseCitiesLink />
          <Login />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default LandingPage;
