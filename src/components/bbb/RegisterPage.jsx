import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../aaa/SignUp";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Regiter</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
