import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import HomeIcon from "../assets/homeIcon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <Link to="/">
          <Image src={HomeIcon} fluid />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
