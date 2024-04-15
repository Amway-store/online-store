import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const Todo = ({ todo, handleDelete, loading }) => {
  return (
    <Container>
      {loading ? (
        <Loader>
          <CircularProgress color="secondary" />
        </Loader>
      ) : (
        <>
          {todo?.map((el) => (
            <Cart>
              <img src={el.imageUrl} alt="Todo" />
              <p>{el.title}</p>
              <p>{el.description}</p>
              <p>{el.price} руб</p>

              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </Cart>
          ))}
        </>
      )}
    </Container>
  );
};

const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Cart = styled("div")`
  img {
    width: 15vw;
  }
  p {
    color: black;
    font-weight: 600;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    width: 15vw;
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
`;

const Loader = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
