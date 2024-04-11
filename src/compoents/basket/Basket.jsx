import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { selectItems, selectTotalPrice } from "../../store/Catalog.slice";
import { Link } from "react-router-dom";

export const Basket = () => {
  const product = useSelector(selectItems);

  const [deleteItem, setDeleteItem] = useState(product);

  const total = useSelector(selectTotalPrice);

  const onDelete = (id) => {
    const newProduct = deleteItem.filter((item) => item.id !== id);

    setDeleteItem(newProduct);
  };

  return (
    <Container>
      {deleteItem.length === 0 ? (
        <h1>Ваша корзина пуста</h1>
      ) : (
        <ContainerChilde>
          <div>
            <h2>Корзина</h2>
            {deleteItem.map((el) => (
              <Cart key={el.id}>
                <img src={el.image} alt="img" />
                <div>
                  <Title>{el.title}</Title>
                  <p>{el.description}</p>
                  <p style={{ color: "black" }}>{el.price} рубль</p>
                </div>
                <MdOutlineClose
                  size={25}
                  color="white"
                  cursor="pointer"
                  onClick={() => onDelete(el.id)}
                />
              </Cart>
            ))}
          </div>

          <Block>
            <h3>Итого к оплате: {total} руб</h3>
            <button>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/order"
              >
                Оформить заказ
              </Link>
            </button>
          </Block>
        </ContainerChilde>
      )}
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  background-color: #03cfd6;
  height: 100vh;
  padding: 1rem;

  h1 {
    margin-top: 5rem;
    color: white;
    font-size: 3rem;
  }
`;

const ContainerChilde = styled("div")`
  display: flex;
  justify-content: space-between;
  h2 {
    color: white;
    font-size: 40px;
  }
`;

const Cart = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;

  img {
    width: 10vw;
  }

  p {
    color: white;
    font-weight: 600;
  }
`;

const Title = styled("p")`
  font-size: 1.5rem;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 28vw;
  height: 20vh;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-top: 5rem;

  h3 {
    color: white;
    font-size: 1.5rem;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    padding: 1rem 2rem 1rem 2rem;
    color: white;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
  }
`;
