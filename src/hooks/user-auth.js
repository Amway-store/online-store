import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("User data:", { email, token, id });
  }, [email, token, id]);

  // Проверяем наличие данных перед их использованием
  if (!email) {
    console.log("User data not found");
    return {
      isAuth: false,
      email: null,
      token: null,
      id: null,
    };
  }

  console.log("User data found:", { email, token, id });

  return {
    isAuth: true,
    email,
    token,
    id,
  };
};
