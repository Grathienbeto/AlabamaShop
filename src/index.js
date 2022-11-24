import React from "react";
import ReactDOM from "react-dom/client";
// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
