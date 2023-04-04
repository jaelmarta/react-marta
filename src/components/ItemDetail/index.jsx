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
            <button>Terminar mi compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;

/*import { ItemCount } from "../ItemCount";
import Productos from "../../mocks/Productos";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../ContextProvider";

const ItemDetail = ({ producto }) => {
  const { onAdd } = useCart();
  const handleAdd = (counter) => {
    onAdd(producto, counter);
  };
  //const producto = Productos;
  //const [cartQuantity, setCartQuantity] = useState(0);
  //const [showItemCount, setShowItemCount] = useState(true);

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
              handleAdd={handleAdd}
            />
          )}
          </div>
          <div>
          <Link to="/">
            <button>Continuar comprando</button>
          </Link>
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;*/
