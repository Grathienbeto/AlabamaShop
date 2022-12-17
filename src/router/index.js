import { createBrowserRouter } from "react-router-dom";

// Index
import App from "../components/App";
// Category
import Category from "../views/category";
// Items
import ItemView from "../views/item";
// Cart
import CartView from "../views/cart";
import { Checkout } from "../views/checkout";

export const router = createBrowserRouter([
  {
    path: "/AlabamaShop",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/item/:id",
    element: <ItemView />,
  },
  {
    path: "/cart",
    element: <CartView />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);
