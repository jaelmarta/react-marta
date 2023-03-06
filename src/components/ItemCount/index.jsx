import { useState } from "react";
import "./itemCount.css";

export const ItemCount = () => {
  const [counter, setCounter] = useState(0);
  const date = new Date().toLocaleDateString();
  const hours = new Date().toLocaleTimeString();

  return (
    <div className="productCard">
      <p className="productDescription">
        you clicked {counter} times, last click on {date}, {hours}
      </p>
      
      <button onClick={() => setCounter(counter - 1)}> - </button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}> + </button>
    </div>
  );
};
