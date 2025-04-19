import { Box } from "@mui/material";
import Logo from "../assets/MYtineraryLogo.png";

const LandingLogo = () => {
  return (
    <div className="landing-logo-container">
      <div className="landing-logo">
        <Box
          component="img"
          src={Logo}
          alt="Start browsing"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default LandingLogo;
