import { CartWidget } from "../CartWidget";
import "./navBar.css"


export const NavBar = () => {
  return (
    <nav className="navBar">
        <div className="titleLogo">JM Store</div>
        <ul>
            <li><a href="#">Un Link</a></li>
            <li><a href="#">Otro Link</a></li>
            <li><a href="#">Otro mas</a></li>
        </ul>
        <CartWidget />
    </nav>
  );
};


