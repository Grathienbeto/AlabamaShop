import { createBrowserRouter } from "react-router-dom";

// Index
import App from "../components/App";
// Category
import Category from "../views/category";
// Items
import ItemView from "../views/item";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);
