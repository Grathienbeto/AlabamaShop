import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
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
        <ItemCount stock={product.stock} />
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
