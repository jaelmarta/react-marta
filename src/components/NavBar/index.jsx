import { CartWidget } from "../CartWidget";
import "./navBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink className="titleLogo" to="/">JM Store</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/category/face">Face Products</NavLink>
      <NavLink to="/category/hair">Hair Products</NavLink>
      <NavLink to="/carrito"><CartWidget /></NavLink>
    </nav>
  );
};
