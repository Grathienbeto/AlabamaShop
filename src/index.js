import React from "react";
import ReactDOM from "react-dom/client";
// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// Context
import { CartContextProvider } from "./context/cartContext";

// FIREBASE
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBzsx1eNhxAlkvnMqR8feC6ONHN31W1tko",
  authDomain: "ecommerce-alabama.firebaseapp.com",
  projectId: "ecommerce-alabama",
  storageBucket: "ecommerce-alabama.appspot.com",
  messagingSenderId: "960842863067",
  appId: "1:960842863067:web:115f7f6f2bef894dd297fe"
};
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
