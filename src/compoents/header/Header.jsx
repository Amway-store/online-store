import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalCount, selectTotalPrice } from "../../store/Catalog.slice";

export const Header = () => {
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <StyledHeader>
      <Nav>
        <LinkStyle to="catalog">Каталог</LinkStyle>
        <LinkStyle to="delivery">Доставка</LinkStyle>
        <LinkStyle to="payment">Оплата</LinkStyle>
        <LinkStyle to="personal">Личный кабинет</LinkStyle>
      </Nav>
      <Block>
        <a href="/">Amway</a>
        <SearchBlock>
          <input placeholder="Поиск" />
          <CiSearch className="search-icon" size={25} color="white" />
        </SearchBlock>
        <Basket>
          <Link to="personal">
            <FaRegUser size={30} color="white" cursor="pointer" />
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
`;

const Number = styled("p")`
  color: white;
  font-weight: 400;
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
`;

const LinkStyle = styled(Link)`
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
