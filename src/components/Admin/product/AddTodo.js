// import React, { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../firebase";
// import { Ix } from "../../../assets";

// export const AddTodo = ({ closeModal, todo }) => {
//   console.log("todo: ", todo);
//   const [title, setTitle] = useState(todo.title || "");
//   const [description, setDescription] = useState(todo.description || "");
//   const [price, setPrice] = useState(
//     typeof todo.price !== "undefined" ? todo.price : ""
//   );
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");

//   React.useEffect(() => {
//     if (todo.title) setTitle(todo.title);
//     if (todo.description) setDescription(todo.description);
//     if (todo.price) setPrice(todo.price);
//   }, [todo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (title.trim() === "" || !image) {
//       return;
//     }
//     const todoData = {
//       title,
//       description,
//       price,
//       imageUrl,
//     };
//     try {
//       const docRef = await addDoc(collection(db, "todos"), todoData);
//       setTitle("");
//       setDescription("");
//       setPrice("");
//       setImage(null);
//       setImageUrl("");
//       console.log("Document written with ID: ", docRef.id);
//       closeModal();
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const imageFile = e.target.files[0];
//     setImage(imageFile);
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImageUrl(reader.result);
//     };
//     reader.readAsDataURL(imageFile);
//   };

//   return (
//     <div className="w-full h-full fixed left-0 top-0 flex justify-center items-center ">
//       <form
//         className="w-[25rem] max-h-[70%] flex flex-col gap-4 rounded-xl bg-[#cec5c5] p-4"
//         onSubmit={handleSubmit}
//       >
//         <p className="w-full flex justify-between">
//           <p />
//           <Ix
//             className="w-5 h-5 cursor-pointer text-end"
//             onClick={closeModal}
//           />
//         </p>
//         <div className="flex mt-[-1rem]  justify-between items-center">
//           <label style={{ marginBottom: "5px" }}>Title:</label>
//           <input
//             className="ml-8"
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="flex justify-between items-center">
//           <label style={{ marginBottom: "5px" }}>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-between items-center">
//           <label style={{ marginBottom: "5px" }}>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label style={{ marginBottom: "15px" }}>Image:</label>
//           <input type="file" onChange={handleImageChange} />
//           {imageUrl && (
//             <img
//               src={imageUrl}
//               alt="Preview"
//               className="w-[10rem] mt-6 h-[7rem] "
//             />
//           )}
//         </div>
//         <div className="btn_container">
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "green",
//               color: "white",
//               padding: "10px",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Добавить
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// AddTodo.js
import React, { useState, useEffect } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Ix } from "../../../assets";

export const AddTodo = ({ closeModal, todo, isEditing, handleUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (isEditing && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setPrice(todo.price);
      if (todo.imageUrl) {
        setImageUrl(todo.imageUrl);
        setShowImage(true);
      } else {
        setImageUrl("");
        setShowImage(false);
      }
    }
  }, [isEditing, todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || !image) {
      return;
    }
    const todoData = {
      title,
      description,
      price,
      imageUrl,
    };
    try {
      if (isEditing) {
        handleUpdate(todo.id, title, description, price, imageUrl);
      } else {
        const docRef = await addDoc(collection(db, "todos"), todoData);
        console.log("Document written with ID: ", docRef.id);
      }
      setTitle("");
      setDescription("");
      setPrice("");
      setImage(null);
      setImageUrl("");
      setShowImage(false);
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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

  const removeImage = () => {
    setImage(null);
    setImageUrl("");
    setShowImage(false);
  };

  return (
    <div className="w-full h-full fixed left-0 top-0 flex justify-center items-center ">
      <form
        className="w-[25rem] max-h-[70%] flex flex-col gap-4 rounded-xl bg-[#cec5c5] p-4"
        onSubmit={handleSubmit}
      >
        <p className="w-full flex justify-between">
          <p />
          <Ix
            className="w-5 h-5 cursor-pointer text-end"
            onClick={closeModal}
          />
        </p>
        <div className="flex mt-[-1rem]  justify-between items-center">
          <label style={{ marginBottom: "5px" }}>Title:</label>
          <input
            className="ml-8"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label style={{ marginBottom: "5px" }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label style={{ marginBottom: "5px" }}>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label style={{ marginBottom: "15px" }}>Image:</label>
          <input type="file" onChange={handleImageChange} />
          {showImage && (
            <div className="image-container">
              <img
                src={imageUrl}
                alt="Preview"
                className="w-[10rem] mt-6 h-[7rem]"
              />
              <button onClick={removeImage} className="remove-image-button">
                Remove Image
              </button>
            </div>
          )}
        </div>
        <div className="btn_container">
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
            {isEditing ? "Изменить" : "Добавить"}
          </button>
        </div>
      </form>
    </div>
  );
};
