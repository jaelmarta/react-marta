import "./ItemListContainer.css"
import { ItemCount } from "../ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
      <main >
          <h2> Bienvenido a {greeting}! </h2>
          <ItemCount />
      </main>
    );
  };
  
  export default ItemListContainer;