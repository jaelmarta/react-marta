import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ detailProduct }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productoDetail = Productos.find(
      (producto) => producto.id === detailProduct
    );
  }, [productDetail]);

  return (
    <div>
      <ItemDetail productos={productoDetail} />
    </div>
  );
}
export default ItemDetailContainer;
