import { Route, Routes } from "react-router-dom";
import { HomePage } from "./compoents/home/Home";
import Layout from "./layout/Layout";
import Catalog from "./compoents/catalog/Catalog";
import { Delivery } from "./compoents/delivery/Delivery";
import { Payment } from "./compoents/ payment/ Payment";
import { Basket } from "./compoents/basket/Basket";
import { Personal } from "./compoents/personal/Personal";

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
