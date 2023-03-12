import { Item } from "../Item";

function ItemList({ productos }) {
  return (
    <div>
      <ul>
        {productos.map((producto, index) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </ul>
    </div>
  );
}

export default ItemList;
