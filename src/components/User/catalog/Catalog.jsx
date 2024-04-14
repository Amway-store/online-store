import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { product } from "../../../utils/data";
import { addItem } from "../../../store/Catalog.slice";
import { selectFilterValue } from "../../../store/Filter.slice";

const Catalog = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const filteredItems = product.filter(
    (item) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.description.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
    window.location.reload();
  };

  return (
    <Container>
      {filteredItems.map((el) => (
        <Cart key={el.id}>
          <img src={el.image} alt="img" />
          <p>{el.title}</p>
          <p>{el.description}</p>
          <p>{el.price} рубль</p>
          <button onClick={() => handleAddToCart(el)}>В корзину</button>
        </Cart>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;

  background-color: #d1e9fe;
  height: 100%;

  @media (max-width: 910px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 445px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 18vw;
  }

  p {
    color: #014572;
    font-weight: 600;
    margin-top: 0.5rem;
  }
  &:hover p {
    color: black;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    padding: 0.5rem 0rem 0.5rem 0rem;
    color: white;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover button {
    opacity: 1;
  }

  @media (max-width: 620px) {
    p {
      font-size: 10px;
    }
  }
`;

export default Catalog;
