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
import { Pag6 } from "./components/User/category/Pag6";
import { Pag7 } from "./components/User/category/Pag7";
import { Pag8 } from "./components/User/category/Pag8";
import { Pag9 } from "./components/User/category/Pag9";
import { Pag10 } from "./components/User/category/Pag10";
import { Pag11 } from "./components/User/category/Pag11";
import { Pag12 } from "./components/User/category/Pag12";
import { Pag13 } from "./components/User/category/Pag13";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalCount } from "./store/Catalog.slice";

function App() {
  const totalCount = useSelector(selectTotalCount);
  const [total, setTotal] = useState(totalCount);

  const router = [
    {
      path: "catalog",
      element: <Catalog setTotal={setTotal} />,
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
      element: <Basket setTotal={setTotal} />,
    },
    {
      path: "page1",
      element: <Pag1 setTotal={setTotal} />,
    },
    {
      path: "page2",
      element: <Pag2 setTotal={setTotal} />,
    },
    {
      path: "page3",
      element: <Pag3 setTotal={setTotal} />,
    },
    {
      path: "page4",
      element: <Pag4 setTotal={setTotal} />,
    },
    {
      path: "page5",
      element: <Pag5 setTotal={setTotal} />,
    },
    {
      path: "page6",
      element: <Pag6 setTotal={setTotal} />,
    },
    {
      path: "page7",
      element: <Pag7 setTotal={setTotal} />,
    },
    {
      path: "page8",
      element: <Pag8 setTotal={setTotal} />,
    },
    {
      path: "page9",
      element: <Pag9 setTotal={setTotal} />,
    },
    {
      path: "page10",
      element: <Pag10 setTotal={setTotal} />,
    },
    {
      path: "page11",
      element: <Pag11 setTotal={setTotal} />,
    },
    {
      path: "page12",
      element: <Pag12 setTotal={setTotal} />,
    },
    {
      path: "page13",
      element: <Pag13 setTotal={setTotal} />,
    },
  ];

  return (
    <Routes>
      <Route path="admin-page-365" element={<Product />} />
      <Route path="/" element={<Layout total={total} setTotal={setTotal} />}>
        <Route index element={<HomePage total={total} />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="login" element={<Personal />} />
    </Routes>
  );
}

export default App;
