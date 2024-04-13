import React from "react";
import styled from "styled-components";

export const Delivery = () => {
  return (
    <Container>
      <h2>Доставка</h2>
      <p>Наш интернет-магазин осуществляет доставку по Москве и области:</p>

      <ol>
        <li>Курьерская доставка по Москве за заказы от 3000руб - бесплатно!</li>
        <li>За заказы менее 3000руб - 350 руб.</li>
        <li>Доставка за МКАД до 7км - 350руб </li>
        <li>Заказы далее 7км от МКАД - 30 руб за км</li>
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
