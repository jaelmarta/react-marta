import { useState } from "react";
import "./itemCount.css";

export const ItemCount = (stock, initial, onAdd) => {
  const [counter, setCounter] = useState(0);
  //const date = new Date().toLocaleDateString();
  //const hours = new Date().toLocaleTimeString();
 //<p className="productDescription">
        //you clicked {counter} times, last click on {date}, {hours}
      //</p>
  return (
    <div className="productCard">
     
      
      <button onClick={() => setCounter(counter - 1)}> - </button>
      <p>{counter}</p>
       <button onClick={() => setCounter(counter + 1)}> + </button>
    </div>
  );
};
