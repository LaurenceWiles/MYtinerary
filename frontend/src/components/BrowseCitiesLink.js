import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import CircledRight from "../assets/circled-right-2.png";

const BrowseCitiesLink = () => {
  return (
    <div className="browse-cities">
      <h2 className="text-center">Start Browsing</h2>
      <div className="circled-right-container">
        <div className="circled-right">
          <Link to="/cities-page">
            <Box
              component="img"
              src={CircledRight}
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
    </div>
  );
};

export default BrowseCitiesLink;
