import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdminHeader = () => {
  return (
    <Container>
      <p>Админ страница</p>
      <Link
        to="/home"
        style={{
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "800",
        }}
      >
        Home
      </Link>
    </Container>
  );
};

const Container = styled("header")`
  width: 100%;
  height: 6rem;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;

  p {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
`;
