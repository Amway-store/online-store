import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Personal = () => {
  return (
    <div>
      <Header>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Главная страница
        </Link>
      </Header>
      <Nav>
        <div>
          <Block>
            <h3>Регистрация</h3>
            <div>
              <p>Контактное лицо (ФИО):</p>
              <input />
            </div>

            <div>
              <p>Контактный телефон:</p>
              <input />
            </div>

            <div>
              <p>Email</p>
              <input />
            </div>

            <div>
              <p>Пароль:</p>
              <input />
            </div>

            <div>
              <p>Повторите пароль</p>
              <input />
            </div>
            <button>Зарегистрироваться</button>
          </Block>
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

const Block = styled("form")`
  margin-top: 1rem;
  width: 30vw;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    width: 15vw;
  }

  button {
    padding: 0.5rem;
    background-color: green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    margin-top: 1rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }

    p {
      width: 100%;
    }

    input {
      width: 20vw;
    }
  }
`;
