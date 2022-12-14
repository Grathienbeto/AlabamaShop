import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

// Mock
// import Productos from "../../mocks/ProductosMock";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const productosDb = snapshot.docs.map((doc) => ({
        id: doc.id,
        category: doc.category,
        ...doc.data(),
      }));
      setProducts(productosDb);
    });

    if (category === "joyeria") {
      const q = query(itemCollection, where("category", "==", "joyeria"));
      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
    } else if (category === "merchandising") {
      const q = query(itemCollection, where("category", "==", "merchandising"));

      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
    }
  }, [category]);

  return (
    <div className="containerProductos mx-auto ">
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
