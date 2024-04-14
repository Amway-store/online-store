import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const AddProduct = ({
  setOpen,
  value,
  setValue,
  value1,
  value2,
  value3,
  setValue1,
  setValue2,
  setValue3,
  addNewProduct,
}) => {
  return (
    <ModalContainer>
      <div>
        <ModalContent>
          <TextField
            id="standard-basic"
            label="Изображение"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Название"
            variant="standard"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Описание"
            variant="standard"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Цена"
            variant="standard"
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
          />

          <div>
            <button onClick={() => setOpen(false)}>Закрыть</button>
            <button onClick={addNewProduct}>Добавить</button>
          </div>
        </ModalContent>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35vw;
  height: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  div {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    justify-content: end;
  }
`;
