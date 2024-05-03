import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const AdminHeader = ({ setFilter }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    setAnchorEl(null);
  };

  return (
    <Container>
      <p>Админ страница</p>

      <p onClick={handleClick} style={{ cursor: "pointer" }}>
        Сортировать товар
      </p>

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
          <MenuItem onClick={() => handleFilterChange("all")}>
            Все товары
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("all")}>
            Средства для стирки
          </MenuItem>
          <MenuItem
            onClick={() =>
              handleFilterChange("Средства для очистки поверхностей")
            }
          >
            Средства для очистки поверхностей
          </MenuItem>
          <MenuItem
            onClick={() => handleFilterChange("Средства для мытья посуды")}
          >
            Средства для мытья посуды
          </MenuItem>
          <MenuItem
            onClick={() => handleFilterChange("aДозаторы и аппликаторыll")}
          >
            Дозаторы и аппликаторы
          </MenuItem>
          <MenuItem
            onClick={() => handleFilterChange("Средства по уходу за детьми")}
          >
            Средства по уходу за детьми
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Уход за телом G&H")}>
            Уход за телом G&H
          </MenuItem>
          <MenuItem
            onClick={() => handleFilterChange("Глистеры для полости рта")}
          >
            Глистеры для полости рта
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Средства для мужчин")}>
            Средства для мужчин
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Шампуни SATINIQUE")}>
            Шампуни SATINIQUE
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Витамины NUTRILITE")}>
            Витамины NUTRILITE
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Парфюмерия из Франции")}>
            Парфюмерия из Франции
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Фильтр e-Springe")}>
            Фильтр e-Springe
          </MenuItem>
          <MenuItem onClick={() => handleFilterChange("Косметика")}>
            Косметика
          </MenuItem>
        </div>
      </Menu>

      <Link
        to="/order"
        style={{
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "800",
        }}
      >
        <p>Заказы</p>
      </Link>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          fontSize: "30px",
          fontWeight: "800",
        }}
      >
        <p>Home</p>
      </Link>
    </Container>
  );
};

const Container = styled("header")`
  width: 100%;
  height: 6rem;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;

  p {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }

  @media (max-width: 750px) {
    p {
      font-size: 25px;
    }
  }

  @media (max-width: 650px) {
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 540px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
