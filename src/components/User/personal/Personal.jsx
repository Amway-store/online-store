import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Personal.css";

export const Personal = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "admin@gmail.com" && value2 === "admin") {
      window.location.href = "/adminPage";
    } else if (value && value2) {
      window.location.href = "home";
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <Header></Header>
      <Nav>
        <div
          className="container d-flex justify-content-center w-100"
          style={{ marginTop: "2rem" }}
        >
          <div className="login">
            <h2 className="mb-3">Login form</h2>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="form-group mb-2 was-validated">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                  type="email"
                  required
                />
                <div className="invalid-feedback">Please Enter your email</div>
              </div>

              <div className="form-group mb-2 was-validated">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  type="password"
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">
                  Please Enter your password
                </div>
              </div>

              <div className="form-group mb-2 was-validated">
                <input type="checkbox" className="form-check-input" />
                <label
                  htmlFor="checkbox"
                  className="form-check-label"
                  style={{ marginLeft: "0.5rem" }}
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-success block mt-2 form-check w-100"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </Nav>
    </div>
  );
};

const Header = styled("div")`
  display: flex;
  align-items: center;
  padding-left: 5rem;
  width: 100%;
  height: 10vh;
  background-color: #5f5e5e;
`;

const Nav = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: #383636;
`;
