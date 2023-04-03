import React, { createContext, useState, useContext } from "react";
import Productos from "../mocks/Productos";

export const Context = createContext();

export const useCart = () => {
    return useContext(Context);
};

export function ContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    console.log("🚀 ~ file: index.jsx:12 ~ ContextProvider ~ cart:", cart);
    const [cartQuantity, setCartQuantity] = useState(0);

    const isInCart = (producto) => cart.some((esta) => esta.id === producto.id);

    const onAdd = (producto, cantidad) => {
        if (isInCart(producto)) {
            const updatedCart = cart.map((item) => {
                if (item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + cantidad };
                } else {
                    return item;
                }
            });
            setCart(updatedCart);
        } else {
            const addProduct = { ...producto, cantidad };
            setCart([...cart, addProduct]);
        }
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




/*import React, { createContext, useState, useContext } from "react";
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
    if (!producto || !cantidad) {
      console.log("Error: producto or cantidad is undefined");
      return;
    }
  
    const id = producto.id;
    if (isInCart(id)) {
      const updatedCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad + cantidad };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      const addProduct = { ...producto, id, cantidad };
      setCart([...cart, addProduct]);
    }
  };

  const onAdd = (producto, cantidad) => {
    const id=producto.id;
    if (isInCart(id) === id) {
      return {
        ...producto,
        cantidad:   producto.cantidad,
      };} else {
      const addProduct = { ...producto, id };
      setCart([...cart, addProduct]);
    }
  };

  (producto, cantidad) => {
    const id=producto.id;
    if (isInCart(id)) {
      return window.alert("Este producto ya fue agregado");
    }
    
    const addProduct = {...producto, id};
    setCart([...cart, addProduct]);
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

export default ContextProvider;*/
