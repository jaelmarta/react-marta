import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer({detailProduct}) {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Productos", detailProduct);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log({ error }));
  }, [detailProduct]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;

 /* useEffect(() => {
    const productoDetail = Productos.find(
      (producto) => producto.id == detailProduct
    );
    setProducto(productoDetail);
  }, [detailProduct]);*/
