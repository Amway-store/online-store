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
  background-color: #03cfd6;
  height: 100vh;
  padding: 1rem;

  h2 {
    color: white;
    font-size: 40px;
  }

  p {
    color: white;
    font-weight: 600;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
  }
`;
