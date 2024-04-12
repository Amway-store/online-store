// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import styled from "styled-components";
// import { selectItems, selectTotalPrice } from "../../store/Catalog.slice";
// import SimpleSnackbar from "../../utils/Snackbar";

// export const Order = () => {
//   const product = useSelector(selectItems);
//   const total = useSelector(selectTotalPrice);

// const [state, setState] = useState({
//   open: false,
//   vertical: "top",
//   horizontal: "center",
// });

// const handleClick = (newState) => () => {
//   setState({ ...newState, open: true });
// };

//   return (
//     <Container>
//       <Block>
//         <h1>Оформление заказа</h1>
//         <p>Контактное лицо (ФИО)</p>
//         <input type="text" />
//         <p>Контактный телефон</p>
//         <input type="text" />
//         <p>Адрес</p>
//         <input type="text" />
//         <br />
//         <br />
//         <br />
//         <p>Покупатель</p>
//         <h3>kasymbekovv1221@gmail.com</h3>
//         <p>Способ оплаты</p>
//         <h3>Наличными или переводом на карту курьера</h3>

//         <button onClick={handleClick({ vertical: "top", horizontal: "right" })}>
//           Подтвердить заказ
//         </button>
//       </Block>
//       <div>
//         {product.map((el) => (
//           <Block2 key={el.id}>
//             <img src={el.image} alt="img" />
//             <div>
//               <p>{el.title}</p>
//               <p>{el.description}</p>
//               <p>{el.price} рубль</p>
//             </div>
//           </Block2>
//         ))}

//         <Cart>
//           <p>Общая сумма товара</p>
//           <p>{total} руб</p>
//         </Cart>

//         <Cart>
//           <p>Стоимость доставки</p>
//           <p>350 руб</p>
//         </Cart>

//         <p style={{ fontSize: "25px" }}>Итого: {total + 350} руб</p>
//       </div>
// <SimpleSnackbar
//   state={state}
//   setState={setState}
//   text="Заказ успешно подтвержден"
// />
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   gap: 5rem;
//   background-color: #03cfd6;
//   height: 100%;
//   padding: 2rem;

//   h1 {
//     color: white;
//   }

//   input {
//     width: 35vw;
//     height: 5vh;
//     border-radius: 10px;
//     border: none;
//   }

//   button {
//     width: 35vw;
//     height: 6vh;
//     border-radius: 10px;
//     border: none;
//     cursor: pointer;
//     color: white;
//     font-size: 20px;
//     background-color: #037ed6;
//   }

//   img {
//     width: 10vw;
//   }

//   p {
//     color: white;
//     font-weight: 600;
//   }
// `;

// const Block = styled("div")`
//   padding-right: 10rem;
//   border-right: 1px solid white;
// `;

// const Block2 = styled("div")`
//   display: flex;
//   gap: 2rem;
//   margin-top: 2rem;
// `;

// const Cart = styled("div")`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid white;

//   p {
//     font-size: 25px;
//   }
// `;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectItems, selectTotalPrice } from "../../../store/Catalog.slice";

export const Order = () => {
  const product = useSelector(selectItems);
  const total = useSelector(selectTotalPrice);

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    address: "",
    total: "",
    myemail: "kasymbekovv1221@gmail.com",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const url = "https://formspree.io/f/mrgnqovn";
    await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();
    setFormData({ name: "", myemail: "", tel: "", address: "", total: "" });
    alert("Сообщение отправлено!");
  };

  return (
    <Container>
      <Block onSubmit={handleSubmit}>
        <h1>Оформление заказа</h1>
        <p>Контактное лицо (ФИО)</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>Контактный телефон</p>
        <input
          type="text"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <p>Адрес</p>
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <p>Итоговое сумма с доставкой</p>
        <input
          name="total"
          value={`${total + 350} руб`}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <p>Покупатель</p>
        <h3>kasymbekovv1221@gmail.com</h3>
        <p>Способ оплаты</p>
        <h3>Наличными или переводом на карту курьера</h3>

        <button type="submit">Подтвердить заказ</button>
      </Block>
      <div>
        {product.map((el) => (
          <Block2 key={el.id}>
            <img src={el.image} alt="img" />
            <div>
              <p>{el.title}</p>
              <p>{el.description}</p>
              <p>{el.price} рубль</p>
            </div>
          </Block2>
        ))}

        <Cart>
          <p>Общая сумма товара</p>
          <p>{total} руб</p>
        </Cart>

        <Cart>
          <p>Стоимость доставки</p>
          <p>350 руб</p>
        </Cart>

        <p style={{ fontSize: "25px" }}>Итого: {total + 350} руб</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5rem;
  background-color: #03cfd6;
  height: 100%;
  padding: 2rem;

  h1 {
    color: white;
  }

  input {
    width: 35vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
  }

  button {
    width: 35vw;
    height: 6vh;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    background-color: #037ed6;
  }

  img {
    width: 10vw;
  }

  p {
    color: white;
    font-weight: 600;
  }
`;

const Block = styled("form")`
  padding-right: 10rem;
  border-right: 1px solid white;
`;

const Block2 = styled("div")`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const Cart = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;

  p {
    font-size: 25px;
  }
`;
