import Stock from "./Stocks";

const ItemDetail = ({product}) => {
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
            <Stock stock={product.stock} />
          </div>
        </div>
      );
};

export default ItemDetail


