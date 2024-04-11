import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navlink = () => {
  return (
    <div>
      <Block>
        <LinkStyle to="pag1">Средства для стирки</LinkStyle>
        <LinkStyle to="pag2">Средства для очистки поверхностей</LinkStyle>
        <LinkStyle to="pag3">Средства для мытья посуды</LinkStyle>
        <LinkStyle to="pag4">Дозаторы и аппликаторы</LinkStyle>
        <LinkStyle to="pag5">Средства по уходу за детьми</LinkStyle>
      </Block>
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

  @media (max-width: 890px) {
    display: none;
  }
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
