import { Item } from "../Item";

function ItemList({ productos }) {
  return (
    <div>
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />;
      })}
    </div>
  );
}

export default ItemList;
