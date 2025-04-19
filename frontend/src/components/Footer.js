import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/homeIcon.png";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <Link to="/">
          <Box
            component="img"
            src={HomeIcon}
            alt="Start browsing"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
