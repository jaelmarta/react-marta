import React, { createContext, useState, useContext } from "react";
import Productos from "../mocks/Productos";

export const Context = createContext();

export const useCart = () => {
  return useContext(Context);
};

export function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [cartQuantity, setCartQuantity] = useState(0);

  const isInCart = (producto) => cart.some((esta) => esta.id === producto.id);
  

  const onAdd = (producto, cantidad) => {
    const isAlredyAdded = isInCart(producto);

    if (isAlredyAdded) {
      const modifyProduct = cart.find((cart) => cart.id === producto.id);
      const addedProduct = {
        ...modifyProduct,
        cantidad: modifyProduct.cantidad + cantidad,
      };

      setCart((prevState) =>
        prevState.map((cart) =>
          cart.id === producto.id ? addedProduct : cart
        )
      );
    } else {
      if (cantidad <= producto.stock) {
      setCart((prevState) => prevState.concat({ ...producto, cantidad }));
      } else {
        window.alert(`El stock es de ${producto.stock} unidades`)
      }}
  };

  const onRemove = (producto) => {
    setCart((cart) => cart.filter((esta) => esta.id !== producto.id));
    
  };

  const removeAll = () => {
    setCart([]);
    setCartQuantity(0);
  };

  
  const contextValue = {
    productos: cart,
    cantidad: cartQuantity,
    onAdd,
    onRemove,
    removeAll,
    
    
  };

  return (
    <>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </>
  );
}

export default ContextProvider;
