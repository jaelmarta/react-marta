import ItemDetailContainer from "../components/ItemDetailContainer";
import { NavBar } from "../components/NavBar";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const params = useParams();

  return (
    <div>
      <NavBar />
      <ItemDetailContainer detailProduct={params.id} />
    </div>
  );
}

export default ItemRoot;
