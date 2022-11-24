import VerDetalles from "./VerDetallesButton";


const Item = ({ product }) => {
  const InfoItem = product
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
        <p>${product.precio}</p>
        <p>{product.stock}</p>
      </div>
      <VerDetalles info={InfoItem} />
    </div>
  );
};

export default Item;
