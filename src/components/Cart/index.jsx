import React from "react";
import { useCart } from "../../ContextProvider";


export const Cart = ({ producto }) => {
  const {onRemove} = useCart();
  
  function totalPorProducto(){
    const total = producto.price * producto.cantidad
    return total
  }
    return (<div>
        <h1>{producto.name} ${producto.price}</h1>
        <h3>Agregaste {producto.cantidad} {producto.name}</h3>
        <h4>Total: ${totalPorProducto()}</h4>
        

        <button onClick={()=>onRemove(producto.id)}>Borrar</button>
    </div>);
}
;
