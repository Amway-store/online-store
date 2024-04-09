import styled from "styled-components";

export const Navlink = () => {
  return (
    <div>
      <Block>
        <LinkStyle href="/">Средства для стирки</LinkStyle>
        <LinkStyle href="/">Средства для очистки поверхностей</LinkStyle>
        <LinkStyle href="/">Средства для мытья посуды</LinkStyle>
        <LinkStyle href="/">Дозаторы и аппликаторы</LinkStyle>
        <LinkStyle href="/">Средства по уходу за детьми</LinkStyle>
      </Block>

      <Block2>
        <p>
          Все товары в наличии! Мы работаем исключительно с оригинальными
          товарами Амвей. Можете оставить заказ, мы свяжемся с Вами до 21.00.
          Если у вас срочные вопросы, то можете сами позвонить +79918108483
        </p>
      </Block2>
    </div>
  );
};

const Block = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #813ffb;
  padding: 0 2rem 0 2rem;
  height: 3rem;
`;
const Block2 = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fe4545;
  padding: 0 2rem 0 2rem;
  height: 8rem;

  p {
    color: white;
  }
`;

const LinkStyle = styled("a")`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
