import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList";
import Productos from "../../mocks/Productos";

function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosPromesa = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Productos), 2000)
    );

    productosPromesa.then((response) => {
      if (isCategoryRoute) {
        const productosFiltrados = response.filter(
          (producto) => producto.category === categoryId
        );
        setProductos(productosFiltrados);
      } else {
        setProductos(response);
      }
    });
  }, [categoryId]);

  return (
    <div>
      {productos.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}
export default ItemListContainer;
