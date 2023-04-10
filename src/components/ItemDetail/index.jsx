import { ItemCount } from "../ItemCount";
import Productos from "../../mocks/Productos";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../ContextProvider";

const ItemDetail = ({ producto }) => {
  const { onAdd } = useCart();
  const [cartQuantity, setCartQuantity] = useState(0);
  const handleAdd = (counter) => {
    onAdd(producto, counter);
  };

  return (
    <div>
      <h2>
        {producto.name} - ${producto.price}
      </h2>
      <div>
        <img src={producto.image} alt={producto.name} />
        <div>
          <p>{producto.longDescription}</p>
        </div>
        <div>
          
        {producto.stock === 0 ? (<p>Fuera de stock</p>) : (
            <ItemCount
              stock={producto.stock}
              initial={0}
              onAddToCart={handleAdd}
              
            />
          )}
          
          <Link to="/">
            <button>Continuar comprando</button>
          </Link>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;

