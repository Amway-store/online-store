import styled from "styled-components";
import { useDispatch } from "react-redux";
import { product } from "../../utils/data";
import { addItem } from "../../store/Catalog.slice";

const Catalog = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <Container>
      {product.map((el) => (
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
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #03cfd6;
  height: 100%;
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20vw;
  overflow: hidden;

  img {
    width: 18vw;
  }

  p {
    color: white;
    font-weight: 600;
  }
  &:hover p {
    color: black;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    padding: 1rem 0rem 1rem 0rem;
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
`;

export default Catalog;
