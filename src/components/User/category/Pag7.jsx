import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectFilterValue } from "../../../store/Filter.slice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { addItem } from "../../../store/Catalog.slice";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

export const Pag7 = ({ setTotal }) => {
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
    (item) => item.selectedCategory === "Глистеры для полости рта"
  );
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
    setTotal(cartItems.length + 1);
  };
  return (
    <>
      <div className="w-full h-[15vh] bg-[#d1e9fe] flex justify-center">
        <p className="w-[93.8%] h-[10vh] bg-white text-[grey] font-[bold] text-[1.2rem] flex justify-start gap-3 items-center pl-10">
          <Link to="/" className="cursor-pointer no-underline text-[grey]">
            Главная
          </Link>{" "}
          <span>/</span> <span>Глистеры для полости рта</span>
        </p>
      </div>
      <Container>
        {loading ? (
          <Loader>
            <CircularProgress color="secondary" />
          </Loader>
        ) : (
          filteredData.map((el) => (
            <Cart>
              <div style={{ position: "relative" }}>
                <img src={el.imageUrl} alt="Todo" />
                <div style={{ paddingLeft: "0.5rem" }}>
                  <Discount>{el.discount} %</Discount>
                </div>
              </div>
              <p>{el.title}</p>
              <p>{el.description}</p>
              <div>
                <p style={{ color: "gray", textDecoration: "line-through" }}>
                  {el.price} руб
                </p>
                <p>{(el.price * (1 - el.discount / 100)).toFixed(2)} руб</p>
              </div>

              <button onClick={() => handleAddToCart(el)}>В корзину</button>
            </Cart>
          ))
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-left: 3rem;
  padding-top: 1rem;

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
  width: 20vw;

  img {
    width: 20vw;
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

const Discount = styled("div")`
  position: absolute;

  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: red;
  border-radius: 50px;

  font-size: 12px;
  color: white;

  @media (max-width: 800px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 9px;
  }
`;