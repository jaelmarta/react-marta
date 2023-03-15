import { ItemCount } from "../ItemCount"
import Productos from "../../mocks/Productos";



const producto = Productos;



const ItemDetail = ({producto}) => {

 
    return (
        <div>
            <h2>{producto.name} - ${producto.price}</h2>
            <div>
                <img src={producto.image} alt={producto.name} />
                <div>
                    <p>{producto.longDescription}</p>
                    <ItemCount stock={producto.stock} />
                </div>
            </div>
        </div>
    )
}
export default ItemDetail