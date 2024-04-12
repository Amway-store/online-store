import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectTotalCount,
  selectTotalPrice,
} from "../../../store/Catalog.slice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);

  const [openModal, setOpenModal] = useState(false);
  return (
    <StyledHeader>
      <Nav>
        <LinkStyle to="catalog">Каталог</LinkStyle>
        <LinkStyle to="delivery">Доставка</LinkStyle>
        <LinkStyle to="payment">Оплата</LinkStyle>
        <LinkStyle to="personal">Личный кабинет</LinkStyle>
        <div>
          <GiHamburgerMenu
            size={25}
            color="white"
            className="menu"
            cursor="pointer"
            onClick={() => setOpenModal((prev) => !prev)}
          />
          {openModal && (
            <MiniModal>
              <LinkStyles to="catalog" onClick={() => setOpenModal(false)}>
                Каталог
              </LinkStyles>
              <LinkStyles to="delivery" onClick={() => setOpenModal(false)}>
                Доставка
              </LinkStyles>
              <LinkStyles to="payment" onClick={() => setOpenModal(false)}>
                Оплата
              </LinkStyles>
              <LinkStyles to="personal" onClick={() => setOpenModal(false)}>
                Личный кабинет
              </LinkStyles>
            </MiniModal>
          )}
        </div>
      </Nav>
      <Block>
        <a href="/">Amway</a>
        <SearchBlock>
          <input placeholder="Поиск" />
          <CiSearch
            className="search-icon"
            size={25}
            color="white"
            cursor="pointer"
          />
        </SearchBlock>
        <Basket>
          <Link to="personal">
            <FaRegUser
              className="userStyle"
              size={30}
              color="white"
              cursor="pointer"
            />
          </Link>
          <div>
            <BasketCount to="basket">
              <SlBasket size={30} color="white" cursor="pointer" />
              <p>{totalCount}</p>
            </BasketCount>
            <p>{totalPrice} руб</p>
          </div>
        </Basket>
        <Number>+996703874862</Number>
      </Block>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  padding: 0rem 5rem 0rem 5rem;
  background-color: green;

  @media (max-width: 660px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

const Block = styled("div")`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 38vw;
    height: 6vh;
    background-color: #48b448;
    border: none;
    border-radius: 0.5rem;
    padding-left: 1rem;
  }

  @media (max-width: 889px) {
    input {
      width: 28vw;
      height: 5vh;
    }
  }

  @media (max-width: 750px) {
    input {
      width: 20vw;
      height: 4vh;
    }
  }

  @media (max-width: 465px) {
    input {
      width: 30vw;
    }
  }
`;

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

const Number = styled("p")`
  color: white;
  font-weight: 400;

  @media (max-width: 465px) {
    display: none;
  }
`;
const SearchBlock = styled("div")`
  position: relative;
  display: inline-block;

  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
    cursor: pointer;
  }
`;

const Nav = styled("div")`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;

  @media (max-width: 501px) {
    display: flex;
    justify-content: end;
  }

  @media (min-width: 501px) {
    .menu {
      display: none;
    }
  }
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;

  @media (max-width: 501px) {
    display: none;
  }
`;

const LinkStyles = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
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

const MiniModal = styled("div")`
  display: flex;
  position: absolute;
  right: 3rem;
  flex-direction: column;
  gap: 1rem;

  width: 5rem;
  height: 9rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #09aa9c;

  z-index: 9999;

  @media (min-width: 501px) {
    display: none;
  }
`;
