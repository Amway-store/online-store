import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectTotalPrice } from "../../../store/Catalog.slice";

export const Order = () => {
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(cartItems);
  }, []);

  const totalCount = useSelector(selectTotalPrice);

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
    total: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const url = "https://formspree.io/f/mrgnqovn";
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();
    setFormData({ name: "", email: "", tel: "", address: "", total: "" });
    alert("Сообщение отправлено!");
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  const [total, setTotal] = useState(totalCount);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setTotal(cartItems.reduce((acc, curr) => acc + parseFloat(curr.price), 0));
  }, []);

  return (
    <Container>
      <Block onSubmit={handleSubmit}>
        <h1>Оформление заказа</h1>
        <p>Контактное лицо (ФИО)</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>Контактный телефон</p>
        <input
          type="text"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <p>Адрес</p>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <p>Ваш email</p>
        <input name="email" value={formData.email} onChange={handleChange} />
        <p style={{ marginTop: "2rem" }}>Итоговое сумма с доставкой</p>
        <p style={{ fontSize: "20px", fontWeight: "800" }}>{total + 350} руб</p>
        <br />
        <br />
        <br />

        <p>Способ оплаты</p>
        <h3>Наличными или переводом на карту курьера</h3>

        <button type="submit">Подтвердить заказ</button>
      </Block>
      <div>
        <Cart>
          <p>Общая сумма товара</p>
          <p>{total} руб</p>
        </Cart>

        <Cart>
          <p>Стоимость доставки</p>
          <p>350 руб</p>
        </Cart>

        <p>Итого: {total + 350} руб</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5rem;
  background-color: #d1e9fe;
  height: 100%;
  padding: 2rem;

  h1 {
    color: #014572;
  }

  input {
    width: 35vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
  }

  button {
    width: 35vw;
    height: 6vh;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    background-color: #037ed6;
  }

  img {
    width: 10vw;
  }

  p {
    color: #014572;
    font-weight: 600;
  }

  @media (max-width: 720px) {
    gap: 1rem;
  }

  @media (max-width: 650px) {
    button {
      width: 35vw;
      height: 6vh;
      font-size: 15px;
    }
  }

  @media (max-width: 420px) {
    button {
      height: 5vh;
      font-size: 10px;
    }
  }
`;

const Block = styled("form")`
  padding-right: 10rem;
  border-right: 1px solid #014572;

  @media (max-width: 940px) {
    padding-right: 0;
  }
`;

const Cart = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #014572;

  p {
    font-size: 25px;
  }

  @media (max-width: 940px) {
    padding-right: 0;
  }

  @media (max-width: 470px) {
    p {
      font-size: 18px;
    }
  }
`;
