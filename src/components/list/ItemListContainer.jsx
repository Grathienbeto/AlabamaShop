import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// Mock
import Productos from "../../mocks/ProductosMock";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  console.log(useParams())

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(Productos);
      }, 1000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);
  return (
    <div className="containerProductos mx-auto ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
