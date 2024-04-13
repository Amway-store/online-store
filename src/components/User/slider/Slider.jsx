import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Amway Home™",
    desc: "SA8™ Концентрированное жидкое средство для стирки, 4 л",
    image:
      "https://www.kz.amway.com/common/medias/EIA.w600.h600.110478-05.04.21-1-120421.jpg?context=bWFzdGVyfHJvb3R8MjQ1OTN8aW1hZ2UvanBlZ3xoOGIvaGUzLzk1MzU3MDM4NDI4NDYuanBnfDk1YWRjYTUxYjcwNzJmZWEwM2E1MTliOTExNzM3Y2E5ODA4ZDY5YTA0NTUyMzc2ZmEzZDVjYTFhMWU2NmQ5ZWE&ccv=S0FaLU8=",
  },
  {
    title: "Amway Home™",
    desc: "SA8™ Универсальный отбеливатель для всех типов тканей",
    image:
      "https://www.kz.amway.com/common/medias/EIA.w600.h600.124485-05.04.21-1-130421.jpg?context=bWFzdGVyfHJvb3R8NTE2OTd8aW1hZ2UvanBlZ3xoMjgvaGQ4Lzk1MzYzMTE2MjM3MTAuanBnfGY3MmIyZmJmZjQwMTZhZmI4ZjEyMDg4NWIwNjhkNGZhZmJlZTBiYTlkOTIzOTRlNTJlY2EyMjllNTc5Y2QwYmQ&ccv=S0FaLU8=",
  },
  {
    title: "Amway Home™",
    desc: "SA8™ Концентрированное жидкое средство для стирки цветного и черного белья",
    image:
      "https://www.kz.amway.com/common/medias/EIA.w600.h600.124456-05.04.21-1-130421.jpg?context=bWFzdGVyfHJvb3R8MjE4NTF8aW1hZ2UvanBlZ3xoMGQvaGExLzk1MzYzMDcxMzQ0OTQuanBnfGUzNGNhZTk0N2ZkOWM2NGYwN2FkNjAyOWZjOWUxYzJlMmEzMjEzYWU2MmNlYzczNDM2ZjE5ZTllN2E1ZmRjYzI&ccv=S0FaLU8=",
  },
];

export const Slider = () => {
  return (
    <Block>
      <div className="slide-container">
        <Slide autoplay={true} duration={4000} transitionDuration={500}>
          {data.map((el, index) => (
            <Container key={index}>
              <div>
                <h2>{el.title}</h2>
                <p>{el.desc}</p>
                <Link to="catalog">
                  <button>Купить</button>
                </Link>
              </div>
              <img src={el.image} alt="" />
            </Container>
          ))}
        </Slide>
      </div>
    </Block>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50vh;
  background-color: #dfeefc;
  align-items: center;

  img {
    width: 20rem;
  }

  h2 {
    color: #0048ae;
  }

  p {
    font-size: 1.5rem;
    color: #0048ae;
  }

  button {
    color: white;
    background-color: #026e9d;
    border: none;
    width: 10.5rem;
    height: 2.5rem;
  }

  @media (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    img {
      width: 15rem;
    }
  }

  @media (max-width: 850px) {
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 565px) {
    height: 30vh;

    img {
      width: 10rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }

    button {
      width: 10.5rem;
      height: 2rem;
    }
  }
`;

const Block = styled("main")`
  @media (max-width: 450px) {
    display: none;
  }
`;
