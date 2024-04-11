import { Route, Routes } from "react-router-dom";
import { HomePage } from "./compoents/home/Home";
import Layout from "./layout/Layout";
import Catalog from "./compoents/catalog/Catalog";
import { Delivery } from "./compoents/delivery/Delivery";
import { Payment } from "./compoents/ payment/ Payment";
import { Basket } from "./compoents/basket/Basket";
import { Personal } from "./compoents/personal/Personal";
import { Page1 } from "./compoents/categoty/Page1";
import { Page2 } from "./compoents/categoty/Page2";
import { Page3 } from "./compoents/categoty/Page3";
import { Page4 } from "./compoents/categoty/Page4";
import { Page5 } from "./compoents/categoty/Page5";
import { Order } from "./compoents/order/Order";

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
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {router.map((item, id) => (
          <Route key={id} path={item.path} element={item.element} />
        ))}
      </Route>
      <Route path="personal" element={<Personal />} />
    </Routes>
  );
}

export default App;
