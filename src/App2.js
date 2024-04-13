import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { LoginPage } from "./components/bbb/LoginPage";
import { RegisterPage } from "./components/bbb/RegisterPage";
import { HomeePage } from "./components/bbb/HomeePage";

export const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomeePage />} />
    </Routes>
  );
};
