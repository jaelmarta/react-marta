import { useContext, useState } from "react";
import "./itemCount.css";
import { Context } from "../../ContextProvider";
import Productos from "../../mocks/Productos";

export const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);
  const { onAdd, onRemove } = useContext(Context);
  

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

  const agregarAlCarrito = () => {
    const cantidad = counter;
    onAdd(cantidad);
  };

  return (
    <div className="addRemove-Button">
      <button onClick={restar} >
        -
      </button>
      <p>{counter}</p>
      <button onClick={sumar} >
        +
      </button>
      <button
        disabled={counter === 0 || stock === 0}
        onClick={agregarAlCarrito}
      >
        Agregar al Carrito
      </button>
      <button onClick={() => onRemove(counter)}>Eliminar</button>
    </div>
  );
};
