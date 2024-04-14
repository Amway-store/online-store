import React, { useState } from "react";
import styled from "styled-components";
import { product } from "../../../utils/data";
import { AdminHeader } from "./AdminHeader";
import { IoIosAdd } from "react-icons/io";
import { AddProduct } from "./AddProduct";

export const Product = () => {
  const [open, setOpen] = useState(false);

  const [newProduct, setNewProduct] = useState(product);

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const addNewProduct = () => {
    const newData = [
      ...newProduct,
      {
        id: product.length + 1,
        image: value,
        title: value1,
        description: value2,
        price: value3,
      },
    ];

    setNewProduct(newData);
    setOpen(false);
  };
  return (
    <div>
      <AdminHeader />

      <Container>
        {newProduct.map((el) => (
          <Cart key={el.id}>
            <img src={el.image} alt="img" />
            <p>{el.title}</p>
            <p>{el.description}</p>
            <p>{el.price} рубль</p>
            <button>Удалить</button>
          </Cart>
        ))}

        {open && (
          <AddProduct
            addNewProduct={addNewProduct}
            setOpen={setOpen}
            value={value}
            value1={value1}
            value2={value2}
            value3={value3}
            setValue={setValue}
            setValue1={setValue1}
            setValue2={setValue2}
            setValue3={setValue3}
          />
        )}
      </Container>
      <div
        style={{ display: "flex", justifyContent: "end", paddingRight: "3rem" }}
      >
        <Icon onClick={() => setOpen(true)}>
          <IoIosAdd size={50} color="white" cursor="pointer" />
        </Icon>
      </div>
    </div>
  );
};

const Container = styled("div")`
  width: 100%;
  height: 100%;
  background-color: #373bb6;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 4rem;

  img {
    width: 18vw;
  }

  p {
    color: black;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    padding: 0.5rem 0rem 0.5rem 0rem;
    color: white;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover button {
    opacity: 1;
  }

  @media (max-width: 620px) {
    p {
      font-size: 10px;
    }
  }
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
