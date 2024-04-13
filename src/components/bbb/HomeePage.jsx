// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/user-auth";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../../store/slices/userSlice";

// export const HomeePage = () => {
//   const { isAuth, email } = useAuth();

//   const dispatch = useDispatch();
//   return isAuth ? (
//     <div>
//       <h1>Welcome</h1>
//       <button onClick={() => dispatch(removeUser())}>Lot out {email}</button>
//     </div>
//   ) : (
//     <Redirect from="/" to="/login" />
//   );
// };
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/user-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

export const HomeePage = () => {
  const { isAuth, email } = useAuth();
  console.log("HomePage isAuth:", isAuth); // Добавляем лог для проверки
  console.log("HomePage email:", email); // Добавляем лог для проверки
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isAuth) {
    navigate("/login");
    return null; // Можно также вернуть заглушку или сообщение
  }

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>Log out {email}</button>
    </div>
  );
};
