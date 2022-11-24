import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// Mock
import Productos from "../../mocks/ProductosMock";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  console.log(useParams())

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(Productos);
      }, 500)
    ).then((data) => {
      if (id) {
        const ItemId = data.find((product) => product.id === parseInt(id));
        setItem(ItemId);
      }
    });
  }, [id]);

  if (!item) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div className="containerProductos mx-auto">
      <div className="ItemList">
        <ItemDetail product={item} />
      </div>
    </div>
  );
};
export default ItemDetailContainer;
