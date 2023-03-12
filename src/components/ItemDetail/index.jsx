import { ItemCount } from "../ItemCount"

const ItemDetail = () => {

 
    return (
        <div>
            <h2>{producto.name} - ${producto.price}</h2>
            <div>
                <img src={producto.image} alt={producto.name} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail