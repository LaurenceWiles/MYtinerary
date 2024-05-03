import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <p className="text-center">Want to build your own MYtinerary?</p>
      <ul className="login-list">
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/create-account">Create Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
