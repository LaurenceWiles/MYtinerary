import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../redux/authSlice";
import LandingLogo from "../components/LandingLogo";
import LandingP from "../components/LandingP";
import { Container } from "react-bootstrap";
import BrowseCitiesLink from "../components/BrowseCitiesLink";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Footer from "../components/Footer";

const LandingPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="landing-page">
      <LandingLogo />
      <Container className="landingpage-container">
        <div className="content">
          <LandingP />
          <BrowseCitiesLink />
          {auth.isAuthenticated ? (
            <Logout handleLogout={() => dispatch(logout())} />
          ) : (
            <Login />
          )}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default LandingPage;
