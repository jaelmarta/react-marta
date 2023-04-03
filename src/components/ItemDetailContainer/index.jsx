import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import Productos from "../../mocks/Productos";

function ItemDetailContainer({ detailProduct }) {
  const [producto, setProducto] = useState({});


  useEffect(() => {
    const productoDetail = Productos.find(
      (producto) => producto.id == detailProduct
    );
    setProducto(productoDetail);
  }, [detailProduct]);

  
  return (
    <div>
      <ItemDetail producto={producto} />

    </div>
  );
}
export default ItemDetailContainer;
