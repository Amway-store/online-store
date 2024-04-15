import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

export const AddTodo = ({ setOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Средства для стирки"
  );

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description.trim() === "" || !image) {
      return;
    }
    const todoData = {
      selectedCategory,
      description,
      price,
      imageUrl,
    };

    const docRef = await addDoc(collection(db, "todos"), todoData);
    console.log("Document written with ID: ", docRef.id);
    setDescription("");
    setPrice();
    setImage(null);
    setImageUrl("");
    setShowImage(false);
    setOpenModal(false);
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile);
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
      setShowImage(true);
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit}>
        <ModalContent>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            <option value="Средства для стирки">Средства для стирки</option>
            <option value="Средства для очистки поверхностей">
              Средства для очистки поверхностей
            </option>
            <option value="Средства для мытья посуды">
              Средства для мытья посуды
            </option>
            <option value="Дозаторы и аппликаторы">
              Дозаторы и аппликаторы
            </option>
            <option value="Средства по уходу за детьми">
              Средства по уходу за детьми
            </option>
          </select>
          <TextField
            id="standard-basic"
            label="Описание"
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Цена"
            variant="standard"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <input type="file" onChange={handleImageChange} />
            {showImage && (
              <BlockImg>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-[10rem] mt-6 h-[7rem]"
                />
              </BlockImg>
            )}
          </div>

          <div style={{ display: "flex" }}>
            <button
              onClick={() => setOpenModal(false)}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Закрыть
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {"Добавить"}
            </button>
          </div>
        </ModalContent>
      </form>
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
  z-index: 999;
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

const BlockImg = styled("div")`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;
