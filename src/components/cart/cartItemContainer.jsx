import { useContext } from "react";
import { Context } from "../../context/cartContext";
import { CartItem } from "./CartItem";
import { Container } from "react-bootstrap";

const CartItemContainer = () => {
  const { carrito } = useContext(Context);

  return (
    <Container>
      <div>
        {carrito.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default CartItemContainer;
