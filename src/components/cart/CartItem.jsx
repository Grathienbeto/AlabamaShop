import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../context/cartContext";

export const CartItem = ({ item }) => {
  const { removeItem} = useContext(Context);
  return (
    <div className="d-flex justify-content-between" key={item.id}>
      <h5>{item.name}</h5>
      <p>${item.precio}</p>
      <p>{item.cantidad} un.</p>
      <Button
        variant="danger"
        onClick={() => {
          removeItem(item.id);
        }}
      >
        Eliminar
      </Button>
    </div>
  );
};
