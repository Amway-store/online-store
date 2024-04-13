import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Personal = () => {
  const [showRegistrationFields, setShowRegistrationFields] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleRegistrationFields = () => {
    setShowRegistrationFields(!showRegistrationFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

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
            <h3 className="text-center mb-2 text-[1.2rem]">Регистрация</h3>
            {showRegistrationFields && (
              <>
                <div>
                  <p>Контактное лицо (ФИО):</p>
                  <input
                    name="name"
                    value={formData.name}
                    type="text"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p>Контактный телефон:</p>
                  <input
                    name="number"
                    type="number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <div>
              <p>Email</p>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <p>Пароль:</p>
              <input
                name="password"
                value={formData.password}
                type="password"
                onChange={handleChange}
              />
            </div>

            {showRegistrationFields && (
              <div>
                <p>Повторите пароль</p>
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  type="password"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="flex justify-between">
              <button className="mb-4 w-[7rem]" onClick={handleLogin}>
                Войти
              </button>
              <p
                className="text-[blue] w-[5rem] pl-[5.5rem] cursor-pointer"
                onClick={toggleRegistrationFields}
              >
                {showRegistrationFields ? "Зарегистрироваться" : "Регистрация"}
              </p>
            </div>
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
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border: 1px solid black;
    outline: none;
    border-radius: 3px;
    padding: 2px;
  }

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
