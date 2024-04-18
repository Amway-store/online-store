import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../components/User/header/Header";
import { Navlink } from "../components/User/navlink/Navlink";
import styled from "styled-components";
import { SlBasket } from "react-icons/sl";

const Layout = ({ total, setTotal }) => {
  return (
    <>
      <Basket className="fixed z-10 top-4 right-4">
        <div className="w-[3.5rem] h-[3.5rem] bg-[#063064] flex justify-center items-center rounded-lg">
          <BasketCount to="basket">
            <SlBasket size={30} color="white" cursor="pointer" />
            <p>{total}</p>
          </BasketCount>
        </div>
      </Basket>
      <Header total={total} setTotal={setTotal} />
      <Navlink />
      <Outlet />
    </>
  );
};

export default Layout;

const Basket = styled("div")`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    p {
      color: white;
      font-weight: 600;
    }
  }

  @media (max-width: 750px) {
    gap: 0rem;

    .userStyle {
      display: none;
    }
  }
`;

const BasketCount = styled(Link)`
  position: relative;

  p {
    display: flex;
    position: absolute;
    left: 18px;
    bottom: 3px;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    font-size: 10px;
    background-color: red;
  }
`;
