import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import Productos from "../../mocks/Productos";
import "./item.css";

const producto = Productos;

export const Item = ({ producto }) => {
  return (
    <div className="product-container">
      <div className="product-card">
        <Link to={`/product/${producto.id}`}>
          <img className="product-image" src={producto.image} alt={producto.name} />
        </Link>
      
      <div className="product-name">
        <h1>{producto.name} </h1>
      </div>
      <div className="product-description">
        <h2>{producto.description}</h2>
      </div>
      <div className="product-price">
        <h2>${producto.price}</h2>
      </div>
      <ItemCount stock={producto.stock} />
      <button className="product-button">Agregar al carrito</button>
      </div>
    </div>
  );
};
