import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import Productos from "../../mocks/Productos";
import { useCart } from "../../ContextProvider";
import "./item.css";

const producto = Productos;

//<button className="product-button">Agregar al carrito</button>

export const Item = ({ producto }) => {
  const { onAdd } = useCart();
  return (
    <div className="product-container">
      <div className="product-card">
        <Link to={`/product/${producto.id}`}>
          <img
            className="product-image"
            src={producto.image}
            alt={producto.name}
          />
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
        {producto.stock === 0 ? (
          <p>Fuera de stock</p>
        ) : (
          <Link to={`/product/${producto.id}`}>
            <button>Ver Detalle</button>
          </Link>
        )}
      </div>
    </div>
  );
};
