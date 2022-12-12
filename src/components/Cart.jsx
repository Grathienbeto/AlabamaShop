import CartItemContainer from "./cart/cartItemContainer";
import { Button, Container } from "react-bootstrap";
import { Context } from "../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { clear, total, carrito } = useContext(Context);
  return carrito.length > 0 ? (
    <div>
      <Container className="d-flex justify-content-between my-5">
        <h1>Detalle de compra</h1>
        <Button variant="danger" onClick={() => clear()}>
          Vaciar
        </Button>
      </Container>
      <CartItemContainer />
      <Container className="d-flex justify-content-between">
        <h2>${total}</h2>
      </Container>
    </div>
  ) : (
    <Container>
      <h2>Carrito de compras vacio</h2>
      <h3>regrese <Link className="text-info" to="/AlabamaShop">AL HOME</Link> para iniciar su compra</h3>
    </Container>
  );
};

export default Cart;