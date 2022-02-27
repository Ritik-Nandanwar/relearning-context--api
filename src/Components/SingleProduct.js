import React from "react";

function SingleProduct({ product, cart, setCart }) {
  return (
    <div className="products">
      <img src={product.image} alt="" />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>{product.price}</span>
      </div>
      {cart.includes(product) ? (
        <button
          onClick={() => {
            setCart(cart.filter((c) => c.id !== product.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
