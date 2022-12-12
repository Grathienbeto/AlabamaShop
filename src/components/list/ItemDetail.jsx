import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(() => {
    return 1;
  });
  const [nuevoStock, setNuevoStock] = useState(() => {
    return product.stock;
  });

  const { addItem } = useContext(Context);

  const handleBotones = (type) => {
    if (type === "resta") {
      setCount((prevCount) => prevCount - 1);
      if (count <= 1) {
        setCount(1);
      }
    }
    if (type === "suma") {
      setCount((count) => count + 1);
      if (count >= nuevoStock) {
        setCount(nuevoStock);
      }
    }
  };

  const onAdd = () => {
    setNuevoStock(nuevoStock - count);
    addItem(product, count);
    setCount(1);
  };

  return (
    <div className="detail-card">
      <img
        className="card-img-top"
        src={product.image}
        alt="Imagen del articulo"
      />

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>${product.precio}</p>

        <ItemCount
          handleBotones={handleBotones}
          onAdd={onAdd}
          counts={count}
          nuevoStock={nuevoStock}
        />

        <div>
          <Link className="finalizarBotton" to="/cart">
            FINALIZAR COMPRA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
