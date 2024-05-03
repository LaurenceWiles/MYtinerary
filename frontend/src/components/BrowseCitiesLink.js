import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import CircledRight from "../assets/circled-right-2.png";

const BrowseCitiesLink = () => {
  return (
    <div>
      <h2>Start Browsing</h2>
      <Link to="/cities-page">
        <Image src={CircledRight} fluid />
      </Link>
    </div>
  );
};

export default BrowseCitiesLink;
