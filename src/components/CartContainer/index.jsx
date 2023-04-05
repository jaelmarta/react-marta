import React from "react";
import { useCart } from "../../ContextProvider";
import { Cart }  from "../Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { productos, removeAll } = useCart();

  const calcularTotalCarrito = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += producto.price * producto.cantidad;
    });
    return total;
  };


  if (productos.length > 0) {
    return (
      <div>
        <h1>Tu carrito:</h1>
        {productos.map((producto, index) => (
          <Cart key={producto.id} producto={producto} />
        ))}
        
        <h2>Total de tu carrito: ${calcularTotalCarrito()}</h2>
        <button>Terminar mi compra</button>
        <button onClick={removeAll}>Vaciar carrito</button>

      </div>
    );
  } else {
    return (
      <div>
        <h1>No tenes productos en tu carrito!</h1>

        <Link to="/">
          <h2>Elegí tus productos acá</h2>
        </Link>
      </div>
    );
  }
};

export default CartContainer;
