import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import HomeIcon from "../assets/homeIcon.png";

const Footer = () => {
  return (
    <div>
      <Link to="/">
        <Image src={HomeIcon} fluid />
      </Link>
    </div>
  );
};

export default Footer;
