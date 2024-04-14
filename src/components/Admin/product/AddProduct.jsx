import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Todo } from "../Todo";

export const AddProduct = () => {
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  const handleEdit = async (todo, title, description, price) => {
    await updateDoc(doc(db, "todos", todo.id), {
      title: title,
      description: description,
      price: price,
    });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  const openCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="title">
      <h1>Todo App</h1>
      <h1 onClick={openCloseModal}>Добавить товар</h1>
      {openModal ? <AddTodo closeModal={openCloseModal} /> : null}
      <div className="">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};
