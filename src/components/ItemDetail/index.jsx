import { ItemCount } from "../ItemCount";
import Productos from "../../mocks/Productos";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useCart } from "../../ContextProvider";


const ItemDetail = ({ producto }) => {
const {onAdd} = useCart();

//const producto = Productos;
const [cartQuantity, setCartQuantity] = useState(0);
const [showItemCount, setShowItemCount] = useState(true);


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
          {showItemCount && <ItemCount stock={producto.stock} initial={1} handleAdd={handleAdd} />}
          {!showItemCount && <p>Cantidad seleccionada: {cartQuantity}</p>}
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
