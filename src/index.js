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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
