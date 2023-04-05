import { useContext } from "react";
import "./cartWidget.css";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../../ContextProvider";


export const CartWidget = () => {

  const {productos, getQuantity} = useCart()
  const cantidadProductos = productos.length

  return (

    <div className="cartWidget">
      <BsCart4 />
      
      {cantidadProductos >= 1 ? (<span>{getQuantity()}</span>) : ( null )}
    </div>
  );
};