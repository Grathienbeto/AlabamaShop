import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cart = <FontAwesomeIcon icon={faCartShopping} className="fa-l cart" />;

// Boton del carrito, agregado de FontAwesome
const CartWidget = () => {
  return (
    <>
      <Link to="/cart" className="cart">{cart}</Link>
    </>
  );
};

export default CartWidget;
