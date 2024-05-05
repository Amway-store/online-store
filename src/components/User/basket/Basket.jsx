import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { selectItems } from "../../../store/Catalog.slice";
import { Order } from "../order/Order";
import { MdDeleteOutline } from "react-icons/md";

export const Basket = ({ setTotal }) => {
  const product = useSelector(selectItems);

  const [deleteItem, setDeleteItem] = useState(product);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (Array.isArray(cartItems)) {
      setDeleteItem(cartItems);
    } else {
      // Обработка случая, если cartItems не является массивом
    }
  }, []);

  const onDelete = (id) => {
    const updatedCartItems = deleteItem.filter((item) => item.id !== id);
    setDeleteItem(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setDeleteItem(updatedCartItems);
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setTotal(cartItems.length);
  };

  const total = deleteItem.reduce((acc, curr) => {
    const priceWithDiscount = curr.discount
      ? curr.price * (1 - curr.discount / 100)
      : curr.price;
    return acc + parseFloat(priceWithDiscount);
  }, 0);

  const [showComponent2, setShowComponent2] = useState(false);

  const goToComponent2 = () => {
    setShowComponent2(true);
  };

  return (
    <div>
      {showComponent2 ? (
        <Order total={total} onDelete={onDelete} cartItems={deleteItem} />
      ) : (
        <Container>
          {deleteItem.length === 0 ? (
            <h1>Ваша корзина пуста</h1>
          ) : (
            <ContainerChilde>
              <div>
                <h2>Корзина</h2>
                {deleteItem.map((el) => (
                  <Cart key={el.id}>
                    <img src={el.imageUrl} alt="img" />

                    <div>
                      <Title>{el.title}</Title>
                      <p>{el.description}</p>
                      <p style={{ color: "black" }}>
                        {(el.price * (1 - el.discount / 100)).toFixed(2)} рубль
                      </p>
                    </div>

                    <MdDeleteOutlineStyle
                      size={30}
                      cursor="pointer"
                      onClick={() => onDelete(el.id)}
                    />
                    <MdOutlineCloseStyle
                      className="closeIcon"
                      size={25}
                      color="#014572"
                      cursor="pointer"
                      onClick={() => onDelete(el.id)}
                    />
                  </Cart>
                ))}
              </div>

              <Block>
                <h3> к оплате: {total} руб</h3>
                <button onClick={goToComponent2}>Оформить заказ</button>
              </Block>
            </ContainerChilde>
          )}
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  text-align: center;
  background-color: #d1e9fe;
  height: 100%;
  padding: 1rem;
  padding-bottom: 5rem;

  h1 {
    margin-top: 5rem;
    color: #014572;
    font-size: 3rem;
  }
`;

const ContainerChilde = styled("div")`
  display: flex;
  justify-content: space-between;
  h2 {
    color: #014572;
    font-size: 40px;
    margin-right: 30rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const Cart = styled.div`
  display: flex;
  margin-top: 3rem;

  img {
    width: 10vw;
  }

  p {
    width: 30rem;
    color: #014572;
    font-weight: 600;
  }

  button {
    display: none;
  }

  @media (max-width: 850px) {
    display: flex;
    justify-content: space-between;
    div {
      width: 10rem;
    }
    p {
      width: 20rem;
    }
    img {
      width: 20vw;
    }
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        display: block;
        width: 8rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    }
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
  width: 20rem;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-top: 5rem;
  background-color: #014572;

  h3 {
    color: white;
    font-size: 1.5rem;
  }

  button {
    border-radius: 8px;
    border: none;
    background-color: #0177a6;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: white;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    button {
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;

const MdDeleteOutlineStyle = styled(MdDeleteOutline)`
  @media (min-width: 541px) {
    display: none;
  }
`;

const MdOutlineCloseStyle = styled(MdOutlineClose)`
  @media (max-width: 540px) {
    display: none;
  }
`;
