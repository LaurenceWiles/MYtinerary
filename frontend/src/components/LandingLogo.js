import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../assets/MYtineraryLogo.png";

const LandingLogo = () => {
  return (
    <div className="landing-logo-container">
      <div className="landing-logo">
        <Image src={Logo} fluid />
      </div>
    </div>
  );
};

export default LandingLogo;
