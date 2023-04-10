import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ItemRoot from "./routes/item";
import CartRoot from "./routes/cart";
import CheckoutRoot from "./routes/checkout"
import "./index.css";
import ContextProvider from "./ContextProvider";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtvZi6qklr4xfTQWqWek9F1y9lqjr52gA",
  authDomain: "react-marta.firebaseapp.com",
  projectId: "react-marta",
  storageBucket: "react-marta.appspot.com",
  messagingSenderId: "1011914062691",
  appId: "1:1011914062691:web:283ffa785fc0bbbb783156"
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/product/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <CartRoot />,
  },
  {
    path: "/checkout",
    element: <CheckoutRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
