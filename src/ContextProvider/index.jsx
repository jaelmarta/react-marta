import React, { createContext, useState, useContext } from "react";
import Productos from "../mocks/Productos";

export const Context = createContext();

export const useCart = () => {
  return useContext(Context);
};

export function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const isInCart = (producto) => cart.some((esta) => esta.id === producto.id);

  const onAdd = (producto, cantidad) => {
    const id=producto.id;
    if (isInCart(id)) {
      cantidad + 1;
    } else {
      const addProduct = { ...producto, id };
      setCart([...cart, addProduct]);
    }
  };

  /*(producto, cantidad) => {
    const id=producto.id;
    if (isInCart(id)) {
      return window.alert("Este producto ya fue agregado");
    }
    
    const addProduct = {...producto, id};
    setCart([...cart, addProduct]);
  };*/

  const onRemove = (producto) => {
    setCart((cart) => cart.filter((esta) => esta.id !== producto.id));
  };

  const removeAll = () => {
    setCart([]);
    setCartQuantity(0);
  };

  /*const addedInCart = (cart, state) => {
    const copyCart = [...productos];
    const addProductInCart = copyCart.map((producto) => {
      if (producto.id === cart.id) {
        return { ...producto, state: !state};
      } else {
        return state;
      }
      });
      setCart(addProductInCart)


  }*/

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
