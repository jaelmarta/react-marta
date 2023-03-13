import "./cartWidget.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
  <div className='cartWidget'>
    <Link to={`/cart`} ><BsCart4/></Link>
    <span>0</span>
  </div>
  );
};


