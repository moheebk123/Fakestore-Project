/*The EmptyCart component in React displays a message indicating that the cart is empty and prompts the user to start adding products in cart.*/
import React from "react";

const EmptyCart = () => {
  return (
    <h1 className="text-center text-xl h-full flex justify-center items-center">
      Nothing Present In Cart <br />
      Start Adding Product in Cart
    </h1>
  );
};

export default EmptyCart;
