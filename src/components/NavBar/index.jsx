import { CartWidget } from "../CartWidget";

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href="#">Un Link</a></li>
            <li><a href="#">Otro Link</a></li>
            <li><a href="#">Otro mas</a></li>
        </ul>
        <CartWidget />
    </nav>
  );
};


