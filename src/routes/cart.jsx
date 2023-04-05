import  CartContainer  from "../components/CartContainer";
import { NavBar } from "../components/NavBar";

function CartRoot() {
  return (
    <div>
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default CartRoot;