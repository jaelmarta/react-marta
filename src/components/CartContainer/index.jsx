import React from "react";
import { useCart } from "../../ContextProvider";
import { Cart } from "../Cart";

const CartContainer = () => {
  const { productos } = useCart();
  if (productos.length > 0) {
    return (
      <div>
        <h1>productos agregados</h1>
        {productos.map((producto, index) => (
          <Cart key={producto.id} producto={producto} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Carrito Vacio</h1>
      </div>
    );
  }
};

export default CartContainer;
