import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectFilterValue } from "../../../store/Filter.slice";
import { product } from "../../../utils/data";
import { addItem } from "../../../store/Catalog.slice";
import { Slider } from "../slider/Slider";

export const HomePage = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const filteredItems = product.filter(
    (item) =>
      item.title.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.description.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <main>
      {filterValue.length !== 0 ? (
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
      ) : (
        <div>
          <Slider />
          <Block>
            <Image
              src="https://kgt-dostavka.ru/assets/img/service/top_l_21.jpg"
              alt=""
            />
            <div>
              <strong>Условия доставки</strong>
              <p>
                Доставка осуществляется в течение двух дней с момента оформления
                заказа. При заказе от двух тысяч доставка бесплатная.
              </p>
            </div>
          </Block>

          <Block2>
            <Image
              src="https://online-london.com/upload/iblock/ee2/4z021mrh6bvjgkgdspo25ffkv9r6j1d0/second.jpg"
              alt=""
            />
            <div>
              <strong>Способ оплаты</strong>
              <p>Оплата наличными или переводом на карту при получении.</p>
            </div>
          </Block2>
        </div>
      )}
    </main>
  );
};

const Image = styled("img")`
  width: 30vw;
`;

const Block = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;

  strong {
    font-size: 1.5rem;
  }

  p {
    width: 25vw;
    font-size: 1.5rem;
  }

  @media (max-width: 990px) {
    p {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

const Block2 = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 8rem;

  strong {
    font-size: 1.5rem;
  }

  p {
    width: 25vw;
    font-size: 1.5rem;
  }

  @media (max-width: 990px) {
    p {
      width: 100%;
      font-size: 1.2rem;
    }
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

  @media (max-width: 620px) {
    p {
      font-size: 10px;
    }
  }
`;

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
