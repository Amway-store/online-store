import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectItems } from "../../../store/Catalog.slice";

export const Order = ({ total, cartItems }) => {
  const deliveryCost = 350;

  const product = useSelector(selectItems);

  const totalPrice = cartItems.reduce((acc, curr) => {
    const priceWithDiscount = curr.discount
      ? curr.price * (1 - curr.discount / 100)
      : curr.price;
    return acc + parseFloat(priceWithDiscount);
  }, 0);

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const productData = product.map((el) => ({
      title: el.description,
      price: el.price,
    }));
    data.append("products", JSON.stringify(productData));
    const url = "https://formspree.io/f/xbjnwaga";
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();
    setFormData({
      name: "",
      email: "",
      tel: "",
      address: "",
    });
    alert("Сообщение отправлено!");
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

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

        <p style={{ marginTop: "2rem" }}>Итоговая сумма с доставкой</p>
        <p style={{ fontSize: "20px", fontWeight: "800" }}>
          {totalPrice > 2000 ? (
            <>
              <div>{totalPrice} руб</div>
            </>
          ) : (
            <>{totalPrice + deliveryCost} руб</>
          )}
        </p>
        <br />

        <p>Способ оплаты:</p>
        <p>Оплата Курьеру</p>
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
          <p>{totalPrice > 2000 ? "Бесплатно" : `${deliveryCost} руб`}</p>
        </Cart>

        <p>Итого: {totalPrice + (totalPrice < 2000 ? deliveryCost : 0)} руб</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5rem;
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
    border: 1px solid black;
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

    input {
      width: 30vw;
    }
  }

  @media (max-width: 350px) {
    padding: 1rem;
  }
`;

const Block = styled("form")`
  padding-right: 10rem;
  border-right: 1px solid #014572;

  @media (max-width: 940px) {
    padding-right: 0;
  }

  @media (max-width: 555px) {
    h1 {
      font-size: 15px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 555px) {
    h3 {
      font-size: 15px;
    }
  }

  @media (max-width: 330px) {
    h1 {
      font-size: 10px;
    }

    p {
      font-size: 9px;
    }

    h3 {
      font-size: 8px;
    }
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

  @media (max-width: 555px) {
    p {
      width: 100%;
      font-size: 15px;
    }
  }

  @media (max-width: 330px) {
    display: flex;
    gap: 0;
    flex-direction: column;
  }

  @media (max-width: 330px) {
    p {
      width: 7rem;
      font-size: 10px;
    }
  }
`;
