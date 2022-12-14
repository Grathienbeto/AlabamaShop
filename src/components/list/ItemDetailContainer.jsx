import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// Mock
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    // con filtro


    //
    getDocs(itemCollection)
      .then((snapshot) => {
        const productosDb = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        return productosDb;
      })
      .then((snapshot) =>
        snapshot.find((doc) => {
          return doc.id === id ? doc : null;
        })
      )
      .then((snapshot) => setItem(snapshot));
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
