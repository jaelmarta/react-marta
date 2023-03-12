import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import { NavBar } from "../components/NavBar";

function ItemRoot() {
    const params = useParams();
    

  return (
    <div>
      <NavBar />
      <ItemDetailContainer detailProduct={params.id}/>
    </div>
  );
}

export default ItemRoot;
