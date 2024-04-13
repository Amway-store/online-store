import styled from "styled-components";

export const Navlink = () => {
  return (
    <div>
      <Block>
        Все товары в наличии! Мы работаем исключительно с оригинальными товарами
        Амвей. Можете оставить заказ, мы свяжемся с Вами до 21.00. Если у вас
        срочные вопросы, то можете сами позвонить +7 985 117 6025
      </Block>
    </div>
  );
};

const Block = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #813ffb;
  padding: 0 2rem 0 2rem;
  height: 6rem;
  color: white;

  @media (max-width: 890px) {
    display: none;
  }
`;
