import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLogin } from "../redux/authSlice";

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("GoogleSignIn component mounted");
    return () => {
      console.log("GoogleSignIn component unmounted");
    };
  }, []);

  const handleSuccess = (response) => {
    console.log("Google sign-in success:", response);
    dispatch(googleLogin(response.credential));
  };

  const handleError = (error) => {
    console.error("Google sign-in error:", error);
  };

  console.log(
    "Google Client ID in google sign in:",
    process.env.REACT_APP_GOOGLE_CLIENT_ID
  );

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      type="standard"
      theme="outline"
      size="large"
      text="signin_with"
      shape="rectangular"
      logo_alignment="left"
    />
  );
};

export default GoogleSignIn;
