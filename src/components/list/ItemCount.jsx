import { useState } from "react";

// Actualiza el Stock
const ItemCount = ({ stock }) => {
  // setea la compra inicial a 0
  const [count, setCount] = useState(() => {
    return 1;
  });

  // setea el Stock
  const [nuevoStock, setNuevoStock] = useState(() => {
    return stock;
  });

  // fx que disminuye la cantidad que uno quiere comprar
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
    if (count <= 1) {
      setCount(1);
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
    setCount(1);
    if (nuevoStock <= 0) {
      setNuevoStock(nuevoStock);
    }
  };

  return (
    <div className="stockDiv">
      <div>
        <h2 className="stock">Stock: {nuevoStock}</h2>
      </div>

      {nuevoStock > 0 ? (
        <div className="cantidadDeItems">
          <button className="countBotton" onClick={decrease}>
            -
          </button>

          <span>{count}</span>

          <button className="countBotton" onClick={increase}>
            +
          </button>
        </div>
      ) : (
        <h2>No hay Stock</h2>
      )}

      {/* Boton habilitado cuando hay stock, desabilitado cuando no lo hay */}
      <div>
        {nuevoStock > 0 ? (
          <button className="comprarBotton" onClick={onAdd}>
            Agregar al carrito
          </button>
        ) : (
          <button className="sinStockBotton" disabled>
            No hay disponibilidad
          </button>
        )}
      </div>
  
    </div>
  );
};

export default ItemCount;
