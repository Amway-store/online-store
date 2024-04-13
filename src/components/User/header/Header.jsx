import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalCount,
  selectTotalPrice,
} from "../../../store/Catalog.slice";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { selectFilterValue, setFilterValue } from "../../../store/Filter.slice";

export const Header = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);

  const [openModal, setOpenModal] = useState(false);

  const filterValue = useSelector(selectFilterValue);

  const handleFilterChange = (e) => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <StyledHeader>
      <Nav>
        <LinkStyle to="catalog">Каталог</LinkStyle>
        <LinkStyle to="delivery">Доставка</LinkStyle>
        <LinkStyle to="payment">Оплата</LinkStyle>
        <LinkStyle to="/">Выйти</LinkStyle>
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
              <LinkStyles to="/" onClick={() => setOpenModal(false)}>
                Выйти
              </LinkStyles>
            </MiniModal>
          )}
        </div>
      </Nav>
      <Block>
        <LinkStyleHome to="/home">
          <img
            src="https://www.kz.amway.com/common/medias/logo-amway-white.png?context=bWFzdGVyfGltYWdlc3wxNDg2OXxpbWFnZS9wbmd8aW1hZ2VzL2hjOC9oZmMvOTIyMzQzMDk2MzIzMC5wbmd8NTk0NzdkNDk0ZjUzMGUwYzQ2MzFhNDNhNzkxMjI2ZWE2Y2M5MjQ1YWE3YjE4YmI1ZTdiZTE2NzY0ODIzOTdmMg&ccv=Qy1LQVotTw=="
            alt="img"
          />
          <p>365</p>
        </LinkStyleHome>

        <SearchBlock>
          <input
            placeholder="Поиск"
            value={filterValue}
            onChange={handleFilterChange}
          />
          <CiSearch
            className="search-icon"
            size={25}
            color="white"
            cursor="pointer"
          />
        </SearchBlock>
        <Basket>
          <Link to="/">
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
        <Number>+7 985 117 6025</Number>
      </Block>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  padding: 0rem 5rem 0rem 5rem;
  background-color: #0a448b;

  @media (max-width: 660px) {
    padding: 0rem 2rem 0rem 2rem;
  }

  @media (max-width: 1150px) {
    padding: 0rem 1rem 0rem 1rem;
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
    height: 5vh;
    border: none;
    border-radius: 0.5rem;
    padding-left: 1rem;
  }

  img {
    width: 10rem;
  }

  @media (max-width: 889px) {
    input {
      width: 35vw;
      height: 5vh;
    }
  }

  @media (max-width: 500px) {
    input {
      width: 30vw;
    }
  }

  @media (max-width: 949px) {
    img {
      width: 7rem;
    }
  }

  @media (max-width: 670px) {
    input {
      width: 25vw;
    }
  }

  @media (max-width: 460px) {
    input {
      display: none;
    }

    div {
      display: none;
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
  font-weight: 600;

  @media (max-width: 580px) {
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

  @media (max-width: 460px) {
    .search-icon {
      display: none;
    }
  }
`;

const Nav = styled("div")`
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;

  @media (max-width: 500px) {
    img {
      width: 7rem;
    }
  }

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

const LinkStyleHome = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 40px;
  font-weight: 800;

  p {
    color: white;
    margin-top: 0.5rem;
  }

  @media (max-width: 949px) {
    font-size: 30px;
  }
`;
