import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { Header } from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <ItemListContainer name={"Aro"} precio={"$500"} stock={6} />
  </React.StrictMode>
);
