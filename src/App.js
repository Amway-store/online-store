import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/User/home/Home";
import Layout from "./layout/Layout";
import Catalog from "./components/User/catalog/Catalog";
import { Delivery } from "./components/User/delivery/Delivery";
import { Payment } from "./components/User/ payment/ Payment";
import { Basket } from "./components/User/basket/Basket";
import { Personal } from "./components/User/personal/Personal";
import { Product } from "./components/Admin/product/Product";
import { Pag1 } from "./components/User/category/Pag1";
import { Pag2 } from "./components/User/category/Pag2";
import { Pag3 } from "./components/User/category/Pag3";
import { Pag4 } from "./components/User/category/Pag4";
import { Pag5 } from "./components/User/category/Pag5";

function App() {
  const router = [
    {
      path: "catalog",
      element: <Catalog />,
    },
    {
      path: "delivery",
      element: <Delivery />,
    },
    {
      path: "payment",
      element: <Payment />,
    },
    {
      path: "basket",
      element: <Basket />,
    },
    {
      path: "page1",
      element: <Pag1 />,
    },
    {
      path: "page2",
      element: <Pag2 />,
    },
    {
      path: "page3",
      element: <Pag3 />,
    },
    {
      path: "page4",
      element: <Pag4 />,
    },
    {
      path: "page5",
      element: <Pag5 />,
    },
  ];

  return (
    <Routes>
      <Route path="adminPage" element={<Product />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="login" element={<Personal />} />
    </Routes>
  );
}

export default App;
