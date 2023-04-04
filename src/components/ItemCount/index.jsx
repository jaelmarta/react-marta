import { useContext, useState } from "react";
import "./itemCount.css";
import { useCart } from "../../ContextProvider";
import Productos from "../../mocks/Productos";

export const ItemCount = ({ stock, initial, onAddToCart }) => {
  const [counter, setCounter] = useState(initial);
  const { onRemove } = useCart();

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };


  return (
    <div className="addRemove-Button">
      <button onClick={restar}>-</button>
      <p>{counter}</p>
      <button onClick={sumar}>+</button>
      <button
        disabled={counter === 0 || stock === 0}
        onClick={() => {
          onAddToCart(counter);
        }}
      >
        Agregar al Carrito
      </button>
      <button onClick={()=>onRemove(counter)}>Eliminar</button>
    </div>
  );
};
