import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Navlink = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("");

  return location.pathname !== "/basket" ? (
    <div>
      <Block1>
        <div>
          <LinkStyle
            to="page1"
            onClick={() => setSelectedPage("page1")}
            selected={selectedPage === "page1"}
          >
            Средства для стирки
          </LinkStyle>
          <LinkStyle
            to="page2"
            onClick={() => setSelectedPage("page2")}
            selected={selectedPage === "page2"}
          >
            Средства для очистки поверхностей
          </LinkStyle>
          <LinkStyle
            to="page3"
            onClick={() => setSelectedPage("page3")}
            selected={selectedPage === "page3"}
          >
            Средства для мытья посуды
          </LinkStyle>
          <LinkStyle
            to="page4"
            onClick={() => setSelectedPage("page4")}
            selected={selectedPage === "page4"}
          >
            Дозаторы и аппликаторы
          </LinkStyle>
          <LinkStyle
            to="page5"
            onClick={() => setSelectedPage("page5")}
            selected={selectedPage === "page5"}
          >
            Средства по уходу за детьми
          </LinkStyle>
        </div>

        <select onChange={(e) => (window.location.href = e.target.value)}>
          <option value="" disabled selected>
            Выберите опцию
          </option>
          <option value="/page1">Средства для стирки</option>
          <option value="/page2">Средства для очистки поверхностей</option>
          <option value="/page3">Средства для мытья посуды</option>
          <option value="/page4">Дозаторы и аппликаторы</option>
          <option value="/page5">Средства по уходу за детьми</option>
        </select>
      </Block1>
      <Block>
        Все товары в наличии! Мы работаем исключительно с оригинальными товарами
        Амвей. Можете оставить заказ, мы свяжемся с Вами до 21.00. Если у вас
        срочные вопросы, то можете сами позвонить +7 985 117 6025
      </Block>
    </div>
  ) : (
    ""
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

const Block1 = styled("div")`
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    gap: 2rem;
    @media (max-width: 700px) {
      display: none;
    }
  }

  h4 {
    color: #014572;
    cursor: pointer;
  }

  select {
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

const LinkStyle = styled(Link)`
  font-weight: 800;
  text-decoration: none;
  color: ${(props) => (props.selected ? "red" : "#014572")};
`;
