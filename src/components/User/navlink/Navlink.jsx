import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Menu from "@mui/material/Menu";

export const Navlink = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <span onClick={handleClick}>Еще</span>

          <div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="flex flex-col gap-2 p-2">
                <LinkStyle
                  to="page6"
                  onClick={() => setSelectedPage("page6")}
                  selected={selectedPage === "page6"}
                >
                  Уход за телом G&H
                </LinkStyle>
                <LinkStyle
                  to="page7"
                  onClick={() => setSelectedPage("page7")}
                  selected={selectedPage === "page7"}
                >
                  Глистеры для полости рта
                </LinkStyle>
                <LinkStyle
                  to="page8"
                  onClick={() => setSelectedPage("page8")}
                  selected={selectedPage === "page8"}
                >
                  Средства для мужчин
                </LinkStyle>
                <LinkStyle
                  to="page9"
                  onClick={() => setSelectedPage("page9")}
                  selected={selectedPage === "page9"}
                >
                  Шампуни SATINIQUE
                </LinkStyle>
                <LinkStyle
                  to="page10"
                  onClick={() => setSelectedPage("page10")}
                  selected={selectedPage === "page10"}
                >
                  Витамины NUTRILITE
                </LinkStyle>

                <LinkStyle
                  to="page11"
                  onClick={() => setSelectedPage("page11")}
                  selected={selectedPage === "page11"}
                >
                  Парфюмерия из Франции
                </LinkStyle>
                <LinkStyle
                  to="page12"
                  onClick={() => setSelectedPage("page12")}
                  selected={selectedPage === "page12"}
                >
                  Фильтр e-Springe
                </LinkStyle>
                <LinkStyle
                  to="page13"
                  onClick={() => setSelectedPage("page13")}
                  selected={selectedPage === "Средства по уходу за детьми"}
                >
                  Косметика
                </LinkStyle>
              </div>
            </Menu>
          </div>
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

          <option value="/page6">Уход за телом G&H</option>
          <option value="/page7">Глистеры для полости рта</option>
          <option value="/page8">Средства для мужчин</option>
          <option value="/page9">Шампуни SATINIQUE</option>
          <option value="/page10">Витамины NUTRILITE</option>
          <option value="/page11">Парфюмерия из Франции</option>
          <option value="/page12">Фильтр e-Springe</option>
          <option value="/page13">Косметика</option>
        </select>
      </Block1>
      <Block>
        Все товары в наличии! Мы работаем исключительно с оригинальными товарами
        Амвей. Можете оставить заказ, мы свяжемся с Вами до 21.00. Если у вас
        срочные вопросы, то можете написать нам на почту olegova20@yandex.ru
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
  background-color: #00ffff;
  padding: 1rem 1rem 1rem 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (max-width: 700px) {
      display: none;
    }

    span {
      font-weight: 600;
      cursor: pointer;
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
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => (props.selected ? "red" : "#014572")};
  &:hover {
    color: red;
  }
`;
