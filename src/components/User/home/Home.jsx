import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <Container>
      <Catalog>
        <p>Каталог</p>
        <LinkStyle href="">Средства для стирки</LinkStyle>
        <LinkStyle href="">Средства для очистки поверхностей</LinkStyle>
        <LinkStyle href="">Средства для мытья посуды</LinkStyle>
        <LinkStyle href="">Дозаторы и аппликаторы</LinkStyle>
        <LinkStyle href="">Средства по уходу за детьми</LinkStyle>
        <LinkStyle href="">Уход за телом G&H</LinkStyle>
        <LinkStyle href="">Глистеры для полости рта</LinkStyle>
        <LinkStyle href="">Средства для мужчин</LinkStyle>
        <LinkStyle href="">Шампуни SATINIQUE</LinkStyle>
        <LinkStyle href="">Витамины NUTRILITE</LinkStyle>
        <LinkStyle href="">Парфюмерия из Франции</LinkStyle>
        <LinkStyle href="">Фильтр e-Springe</LinkStyle>
        <LinkStyle href="">Косметика</LinkStyle>
      </Catalog>
      <div>
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
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
`;

const Catalog = styled("div")`
  display: flex;
  width: 25vw;
  gap: 1.5rem;
  flex-direction: column;
  background-color: #00b7ff;
  padding: 0rem 2rem 0rem 2rem;

  p {
    color: white;
    font-weight: 800;
  }
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;

  &:hover {
    color: black;
  }
`;

const Image = styled("img")`
  width: 30vw;
`;

const Block = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-left: 5rem;

  strong {
    font-size: 1.5rem;
  }

  p {
    width: 25vw;
    font-size: 1.5rem;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;

    p {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

const Block2 = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 8rem;
  margin-left: 5rem;

  strong {
    font-size: 1.5rem;
  }

  p {
    width: 25vw;
    font-size: 1.5rem;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    p {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;
