import React from "react";
import { useCart } from "../../ContextProvider";


export const Cart = ({ producto }) => {
  const {onRemove} = useCart();
  console.log(producto)

    return (<div>
        <h1>{producto.name}</h1>
        <h3>{producto.cantidad}</h3>
        <h3>{producto.id}</h3>
        <h4>Precio Unitario: ${producto.precio}</h4>
        <h4>Total: ${producto.precio * producto.quantity}</h4>
        <button onClick={()=>onRemove(producto.id)}>Borrar</button>
    </div>);
}
;
