import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";
import CircularProgress from "@mui/material/CircularProgress";

export const Slider = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(todos);

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
  return (
    <Block>
      {loading ? (
        <Loader>
          <CircularProgress color="secondary" />
        </Loader>
      ) : (
        <div className="slide-container">
          <Slide autoplay={true} duration={4000} transitionDuration={500}>
            {todos.map((el, index) => (
              <Container key={index}>
                <div>
                  <h2>{el.description}</h2>
                  <p>{el.price} руб</p>
                  <Link to="catalog">
                    <button>Купить</button>
                  </Link>
                </div>
                <img src={el.imageUrl} alt="" />
              </Container>
            ))}
          </Slide>
        </div>
      )}
    </Block>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50vh;
  background-color: #dfeefc;
  align-items: center;

  img {
    width: 20rem;
  }

  h2 {
    width: 30rem;
    color: #0048ae;
  }

  p {
    font-size: 1.5rem;
    color: #0048ae;
  }

  button {
    color: white;
    background-color: #026e9d;
    border: none;
    width: 10.5rem;
    height: 2.5rem;
  }

  @media (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    img {
      width: 15rem;
    }
  }

  @media (max-width: 850px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 565px) {
    height: 30vh;

    img {
      width: 10rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    button {
      width: 10.5rem;
      height: 2rem;
    }
  }
`;

const Block = styled("main")`
  @media (max-width: 450px) {
    display: none;
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
