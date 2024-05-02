import Image from "react-bootstrap/Image";
import Logo from "../assets/MYtineraryLogo.png";

const LandingLogo = () => {
  return (
    <div>
      <Image src={Logo} fluid />
    </div>
  );
};

export default LandingLogo;
