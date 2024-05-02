import React from "react";
import LandingLogo from "../components/LandingLogo";
import LandingP from "../components/LandingP";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <LandingLogo />
        <LandingP />
      </Container>
    </div>
  );
};

export default LandingPage;
