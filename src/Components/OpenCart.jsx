import React from "react";
import propTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";

/*The OpenCart component is a React component that displays a shopping cart icon with a badge showing
  the number of products in the cart and allows the user to open the cart when clicked.
*/
const OpenCart = ({ showCart, cartProductsLength }) => {
  const handleOpenCart = () => {
    showCart();
  };
  return (
    <IconButton
      className="absolute cursor-pointer z-15"
      sx={{ position: "absolute", top: "10px", right: "10px" }}
      aria-label="cart"
      onClick={handleOpenCart}
    >
      <Badge
        badgeContent={cartProductsLength}
        color="primary"
      >
        <ShoppingCartIcon  />
      </Badge>
    </IconButton>
  );
};

OpenCart.propTypes = {
  cartProductsLength: propTypes.number.isRequired,
  showCart: propTypes.func.isRequired,
};

export default OpenCart;
