import React from "react";
import { Container } from "./styled";

const CartDetail = ({ cart, getCartTotal }) => {
  return (
    <Container>
      {cart.map(({ name, price, quantity }) => (
        <ul>
            <li><p>{name} x {quantity}</p><p className="precio">{price} €</p></li>
        </ul>
      ))}
      <h3>Total: {getCartTotal()} €</h3>
    </Container>
  );
};

export default CartDetail;