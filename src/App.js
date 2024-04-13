import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/User/home/Home";
import Layout from "./layout/Layout";
import Catalog from "./components/User/catalog/Catalog";
import { Delivery } from "./components/User/delivery/Delivery";
import { Payment } from "./components/User/ payment/ Payment";
import { Basket } from "./components/User/basket/Basket";
import { Personal } from "./components/User/personal/Personal";
import { Page1 } from "./components/User/categoty/Page1";
import { Page2 } from "./components/User/categoty/Page2";
import { Page3 } from "./components/User/categoty/Page3";
import { Page4 } from "./components/User/categoty/Page4";
import { Page5 } from "./components/User/categoty/Page5";
import { Order } from "./components/User/order/Order";
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
    {
      path: "pag1",
      element: <Page1 />,
    },
    {
      path: "pag2",
      element: <Page2 />,
    },
    {
      path: "pag3",
      element: <Page3 />,
    },
    {
      path: "pag4",
      element: <Page4 />,
    },
    {
      path: "pag5",
      element: <Page5 />,
    },
    {
      path: "order",
      element: <Order />,
    },
  ];

  return (
    <Routes>
      <Route path="admin" element={<AddProduct />} />
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
