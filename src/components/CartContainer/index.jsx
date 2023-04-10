import React from "react";
import { useCart } from "../../ContextProvider";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const CartContainer = () => {
  const { productos, removeAll } = useCart();
  const db = getFirestore();
  const colecctionRef = collection(db, "orders");

  const calcularTotalCarrito = () => {
    let total = 0;
    productos.forEach((producto) => {
      total += producto.price * producto.cantidad;
    });
    return total;
  };
  //update
  function updateProduct(productId, finalStock) {
    const itemRef = doc(db, "Productos", productId);
    updateDoc(itemRef, { stock: finalStock });
  }

  //checkout

  function checkout() {
    const nombre = document.getElementById("formNombre").value;
    const apellido = document.getElementById("formApellido").value;
    const telefono = document.getElementById("formTelefono").value;
    const email = document.getElementById("formEmail").value;

    const order = {
      buyer: {
        nombre: `${nombre}`,
        apellido: `${apellido}`,
        telefono: `${telefono}`,
        email: `${email}`,
      },
      products: productos,
      total: calcularTotalCarrito(),
      fecha: new Date().toLocaleDateString(),

    };

    addDoc(colecctionRef, order)
      .then(() => {
        productos.map((product) => {
          const finalStock = product.stock - product.cantidad;
          updateProduct(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));

    removeAll();
  }

  //return

  if (productos.length > 0) {
    return (
      <div>
        <h1>Tu carrito:</h1>
        {productos.map((producto, index) => (
          <Cart key={producto.id} producto={producto} />
        ))}

        <h2>Total de tu carrito: ${calcularTotalCarrito()}</h2>
        <button onClick={removeAll}>Vaciar carrito</button>
        <div>
          <h3>Información para la compra</h3>
          <form id="form" name="form">
            <label>
              Nombre:
              <input
                id="formNombre"
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                required
              />
            </label>
            <br />
            <label>
              Apellido:
              <input
                id="formApellido"
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
                required
              />
            </label>
            <br />
            <label>
              Telefono:
              <input
                id="formTelefono"
                type="text"
                name="telefono"
                placeholder="Ingrese su telefono"
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                id="formEmail"
                type="email"
                name="email"
                placeholder="Ingrese su email"
                required
              />
            </label>
            <br />
            <Link to="/checkout">
              <button onClick={checkout}>Terminar mi compra</button>
            </Link>
          </form>
        </div>
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
