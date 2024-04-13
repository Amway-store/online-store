import React from "react";
import styled from "styled-components";

export const Payment = () => {
  return (
    <Container>
      <h2>Оплата</h2>
      <p>Вы можете оплатить заказ:</p>

      <ol>
        <li>Наличными курьеру при получении заказа</li>
        <li>Переводом на карту СБЕР курьера</li>
      </ol>
    </Container>
  );
};

const Container = styled.div`
  background-color: #d1e9fe;
  height: 100vh;
  padding: 1rem;

  h2 {
    color: #014572;
    font-size: 40px;
  }

  p {
    color: #014572;
    font-weight: 600;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #014572;
  }
`;
