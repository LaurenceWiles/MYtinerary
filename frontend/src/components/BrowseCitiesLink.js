import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import CircledRight from "../assets/circled-right-2.png";

const BrowseCitiesLink = () => {
  return (
    <div className="browse-cities">
      <h2 className="text-center">Start Browsing</h2>
      <div className="circled-right-container">
        <div className="circled-right">
          <Link to="/cities-page">
            <Image src={CircledRight} fluid />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseCitiesLink;
