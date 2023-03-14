import "./cartWidget.css";
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
  return (
  <div className='cartWidget'>
    <BsCart4/>
    <span>0</span>
  </div>
  );
};


