import { useContext } from "react";
import "./cartWidget.css";
import { BsCart4 } from "react-icons/bs";
import { Context } from "../../ContextProvider";

export const CartWidget = () => {

    const {productos} = useContext (Context)
  return (
    <div className="cartWidget">
      <BsCart4 />
      <span>{productos.length}</span>
    </div>
  );
};
