import "./cartWidget.css";
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
  return (
  <div className='cartWidget'>
    <a href="#"><BsCart4/></a>
    <span>0</span>
  </div>
  );
};


