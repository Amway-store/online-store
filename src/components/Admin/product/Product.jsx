import React, { useState } from "react";
import styled from "styled-components";
import { AdminHeader } from "./AdminHeader";
import { AddProduct } from "./AddProduct";
import { IoIosAdd } from "react-icons/io";

export const Product = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <AdminHeader />

      <div>
        <AddProduct openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div
        style={{
          display: "flex",
          marginRight: "3rem",
          justifyContent: "end",
        }}
      >
        <Icon onClick={() => setOpenModal((prev) => !prev)}>
          <IoIosAdd size={50} color="white" cursor="pointer" />
        </Icon>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  max-height: 100%;
  background-color: #373bb6;
`;

const Icon = styled("div")`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: red;
  border-radius: 50rem;
  top: 40rem;
`;
