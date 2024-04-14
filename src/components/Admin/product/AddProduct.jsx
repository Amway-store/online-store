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
