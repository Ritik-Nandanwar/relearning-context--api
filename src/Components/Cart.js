import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="">
      <span style={{ fontSize: 30 }}>My Cart</span>;
      <br />
      <span style={{ fontSize: 30 }}>Total : ${total}</span>
      <div className="productContainer">
        {cart.map((product) => (
          <SingleProduct
            product={product}
            key={product.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
