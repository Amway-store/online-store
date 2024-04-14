import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/User/home/Home";
import Layout from "./layout/Layout";
import Catalog from "./components/User/catalog/Catalog";
import { Delivery } from "./components/User/delivery/Delivery";
import { Payment } from "./components/User/ payment/ Payment";
import { Basket } from "./components/User/basket/Basket";
import { Personal } from "./components/User/personal/Personal";
import { AddProduct } from "./components/Admin/product/AddProduct";

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
  ];

  return (
    <Routes>
      <Route path="adminPage" element={<AddProduct />} />
      <Route path="home" element={<Layout />}>
        <Route index element={<HomePage />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="/" element={<Personal />} />
    </Routes>
  );
}

export default App;
