import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "../assets/MYtineraryLogo.png";

const LandingLogo = () => {
  return (
    <div className="landing-logo">
      <Container>
        <Image src={Logo} fluid />
      </Container>
    </div>
  );
};

export default LandingLogo;
