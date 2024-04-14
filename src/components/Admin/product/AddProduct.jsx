import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Todo } from "../Todo";

export const AddProduct = () => {
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setOpenModal(true);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const openCloseModal = () => {
    setOpenModal(!openModal);
    setIsEditing(false);
  };

  const handleUpdate = async (id, title, description, price, imageUrl) => {
    console.log("Updating todo:", id, title, description, price, imageUrl);
    await updateDoc(doc(db, "todos", id), {
      title: title,
      description: description,
      price: price,
      imageUrl: imageUrl,
    });
    setOpenModal(false);
    setIsEditing(false);
  };

  return (
    <div className="title">
      <h1>Todo App</h1>
      <h1 onClick={openCloseModal}>Добавить товар</h1>
      {openModal ? (
        <AddTodo
          todo={selectedTodo}
          isEditing={isEditing}
          handleUpdate={handleUpdate}
          closeModal={openCloseModal}
        />
      ) : null}
      <div className="">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};
// import React from "react";
// import styled from "styled-components";
// import TextField from "@mui/material/TextField";

// export const AddProduct = ({
//   setOpen,
//   value,
//   setValue,
//   value1,
//   value2,
//   value3,
//   setValue1,
//   setValue2,
//   setValue3,
//   addNewProduct,
// }) => {
//   return (
//     <ModalContainer>
//       <div>
//         <ModalContent>
//           <TextField
//             id="standard-basic"
//             label="Изображение"
//             variant="standard"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//           <TextField
//             id="standard-basic"
//             label="Название"
//             variant="standard"
//             value={value1}
//             onChange={(e) => setValue1(e.target.value)}
//           />
//           <TextField
//             id="standard-basic"
//             label="Описание"
//             variant="standard"
//             value={value2}
//             onChange={(e) => setValue2(e.target.value)}
//           />
//           <TextField
//             id="standard-basic"
//             label="Цена"
//             variant="standard"
//             value={value3}
//             onChange={(e) => setValue3(e.target.value)}
//           />

//           <div>
//             <button onClick={() => setOpen(false)}>Закрыть</button>
//             <button onClick={addNewProduct}>Добавить</button>
//           </div>
//         </ModalContent>
//       </div>
//     </ModalContainer>
//   );
// };

// const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   width: 35vw;
//   height: 100%;
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;

//   div {
//     display: flex;
//     gap: 2rem;
//     margin-top: 1rem;
//     justify-content: end;
//   }
// `;
