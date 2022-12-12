import React, { createContext, useState } from "react";
export const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  function clear() {
    setCarrito([]);
    setTotal(0);
    setQuantity(0);
  }

  const removeItem = (itemId) => {
    const found = carrito.find((producto) => producto.id === itemId);
    setCarrito(carrito.filter((item) => item.id !== itemId));
    setQuantity(quantity - found.cantidad);
    setTotal(total - found.precio * found.cantidad);
  };

  const isInCart = (itemId) => {
    return carrito.some((item) => item.id === itemId);
  };

  /*
  function addItem(product, quantity) {
    setCarrito((carrito) => [...carrito, product]);
  }
*/

  const addItem = (item, cantidad) => {
    console.log(item, cantidad)
    
    if (isInCart(item.id)) {
      const sumaQuantity = carrito.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCarrito(sumaQuantity);
    } else {
      setCarrito([...carrito, { ...item, cantidad }]);
    }
    setQuantity(quantity + cantidad);
    setTotal(total + item.precio * cantidad);
    
  };


  return (
    <Context.Provider
      value={{
        carrito,
        setCarrito,
        addItem,
        clear,
        removeItem,
        quantity,
        setQuantity,
        total,
        setTotal,
        isInCart
      }}
    >
      {children}
    </Context.Provider>
  );
};
