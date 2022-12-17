import VerDetalles from "./VerDetallesButton";
import { Container } from "react-bootstrap";

const Item = ({ product }) => {
  const InfoItem = product;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={product.image}
        alt="Imagen del articulo"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="card-price-stock">
          <p>${product.precio}</p>
          <p>Stock: {product.stock}</p>
        </div>
      </div>
      <VerDetalles info={InfoItem} />
    </div>
  );
};

export default Item;
