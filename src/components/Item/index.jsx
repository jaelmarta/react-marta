import { ItemCount } from "../ItemCount"
import { Link } from "react-router-dom"
import Productos from "../../mocks/Productos"

const producto = Productos;

export const Item = ({producto}) => {
    return (
        <div>
            <img className="imgProduct" src={producto.image} alt={producto.name}/>
            <h1>{producto.name} </h1>
            <h2>{producto.description}</h2>
            <h2>${producto.price}</h2>
            <ItemCount stock={producto.stock}/>
            <button>
              <Link to={`/product/${producto.id}`}>
                Ver detalle
              </Link>
            </button>
        </div>
    )
}



