import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectFilterValue } from "../../../store/Filter.slice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { addItem } from "../../../store/Catalog.slice";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../../firebase";

export const Pag2 = () => {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);

  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filteredItems = todos.filter((item) =>
    item.description.toLowerCase().includes(filterValue.toLowerCase())
  );

  const filteredData = filteredItems.filter(
    (item) => item.selectedCategory === "Средства для очистки поверхностей"
  );

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
    window.location.reload();
  };
  return (
    <Container>
      {loading ? (
        <Loader>
          <CircularProgress color="secondary" />
        </Loader>
      ) : (
        filteredData.map((el) => (
          <Cart key={el.id}>
            <img src={el.imageUrl} alt="img" />
            <p>{el.title}</p>
            <p>{el.description}</p>
            <p>{el.price} рубль</p>
            <button onClick={() => handleAddToCart(el)}>В корзину</button>
          </Cart>
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;

  background-color: #d1e9fe;
  height: 100%;

  @media (max-width: 910px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 445px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Cart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 18vw;
  }

  p {
    color: #014572;
    font-weight: 600;
    margin-top: 0.5rem;
  }
  &:hover p {
    color: black;
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
