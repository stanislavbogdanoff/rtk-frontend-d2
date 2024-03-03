import React, { useState } from "react";
import { useAddItemToCartMutation } from "../../redux/api/usersApi";
import { useUser } from "../../hooks/useUser";

import "./Product.css";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const user = useUser();
  console.log(user);
  const [addToCart] = useAddItemToCartMutation();
  return (
    <div className="product_card">
      <div>Name: {product.name}</div>
      <p>Price: {product.price}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <h2>{count}</h2>
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0 ? true : false}
        >
          -1
        </button>
      </div>
      <button
        onClick={() =>
          addToCart({
            productId: product._id,
            amount: count,
            token: user?.token,
          })
        }
      >
        Add to cart
      </button>
      <button>Wishlist</button>
    </div>
  );
};

export default Product;
