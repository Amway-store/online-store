import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import {
  collection,
  doc,
  onSnapshot,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Todo } from "../Todo";

export const AddProduct = ({ openModal, setOpenModal }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTodo] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div>
      {openModal && <AddTodo setOpenModal={setOpenModal} todo={selectedTodo} />}

      <div>
        <Todo loading={loading} todo={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
