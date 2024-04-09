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
        <Modal>
          <h3>Регистрация</h3>
          <Block>
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
        </Modal>
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

const Modal = styled("div")`
  margin-top: 1rem;
  width: 60vw;
  height: 55vh;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Block = styled("div")`
  border: 1px solid gray;
  padding: 1rem;
  div {
    display: flex;
    align-items: center;
  }

  p {
    width: 10vw;
  }

  button {
    padding: 0.5rem;
    background-color: green;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }
`;
