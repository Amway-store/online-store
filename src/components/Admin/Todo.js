import React, { useState } from "react";

export const Todo = ({ todo, handleDelete, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newPrice, setNewPrice] = useState(todo.price);
  const [newImage, setNewImage] = useState(todo.imageUrl);

  return (
    <div className=" inline-block ml-10">
      <div
        className=""
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          width: "15rem",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        {newImage && (
          <img
            src={newImage}
            alt="Todo"
            style={{ maxWidth: "150px", marginBottom: "10px" }}
          />
        )}
        <div style={{ marginBottom: "10px" }}>
          <strong>Title:</strong> {newTitle}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Description:</strong> {newDescription}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Price:</strong> {newPrice}
        </div>

        <div>
          <button
            className="button-edit"
            onClick={() =>
              handleEdit(todo.id, newTitle, newDescription, newPrice, newImage)
            }
            style={{
              backgroundColor: "blue",
              color: "white",
              marginRight: "5px",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
          <button
            className="button-delete"
            onClick={() => handleDelete(todo.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
