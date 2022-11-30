import { useState } from "react";

// Actualiza el Stock
const ItemCount = ( {stock} ) => {
  // setea la compra inicial a 0
  const [count, setCount] = useState(() => {
    return 0;
  });

  // setea el Stock
  const [nuevoStock, setNuevoStock] = useState(() => {
    return stock;
  });

  // fx que disminuye la cantidad que uno quiere comprar
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  // fx que aumenta la cantidad que uno quiere comprar
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
    if (count >= nuevoStock) {
      setCount(nuevoStock);
    }
  };

  // fx que compra y disminuye el stock dependiendo de cuanto haya comprado
  const onAdd = () => {
    setNuevoStock(nuevoStock - count);
    setCount(0)      
    if (nuevoStock <= 0) {
      setNuevoStock(nuevoStock);
    }
  };

  return (
    <div className="stockDiv">
      <div>
        <h2 className="stock">Stock: {nuevoStock}</h2>
      </div>

      <div className="cantidadDeItems">
        <button className="countBotton" onClick={decrease}>
          -
        </button>

        <span>{count}</span>

        <button className="countBotton" onClick={increase}>
          +
        </button>
      </div>

      <div>
        <button
          className="comprarBotton"
          onClick={onAdd}
          disabled={nuevoStock === 0}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
