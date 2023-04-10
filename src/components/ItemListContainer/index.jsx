import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList";
import Productos from "../../mocks/Productos";
import { BeatLoader } from "react-spinners";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProductos] = useState([]);

  const getDocsFromFirebase = async (collection) => {
    await getDocs(collection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log({ error }));
  };

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Productos");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );

      getDocsFromFirebase(queryResult);
    } else {
      getDocsFromFirebase(itemsCollection);
    }
  }, [categoryId]);

  return (
    <div>
      {productos.length === 0 ? (
        <BeatLoader />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}
export default ItemListContainer;


