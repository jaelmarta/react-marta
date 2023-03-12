import { ItemCount } from "../ItemCount"
import { Link } from "react-router-dom"

export const Item = ({producto}) => {
    return (
        <div>
            <div>{producto.image}</div>
            <h1>{producto.name} </h1>
            <h2>{producto.description}</h2>
            <h2>{producto.stock}</h2>
            <ItemCount/>
            <button>
            <Link to={`/producto/${id}`} />
                    Ver detalle
            </button>
        </div>
    )
}
