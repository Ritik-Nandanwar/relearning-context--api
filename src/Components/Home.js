import React, { useContext, useState } from "react";
import { CartContext } from "../Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  
  const productsArray = [
    {
      id: 1,
      name: "Book",
      price: 1200,
      image:
        "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=390&h=520&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    },
    {
      id: 2,
      name: "bag",
      price: 1200,
      image:
        "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=390&h=520&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    },
    {
      id: 3,
      name: "cup",
      price: 1200,
      image:
        "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=390&h=520&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    },
    {
      id: 4,
      name: "pen",
      price: 1200,
      image:
      "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=390&h=520&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    },
    {
      id: 5,
      name: "mac book",
      price: 1200,
      image:
      "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=390&h=520&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    },
  ];
  const [products] = useState(productsArray);
  const {cart , setCart} = useContext(CartContext)
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} cart={cart} setCart={setCart}/>
      ))}
    </div>
  );
};

export default Home;
