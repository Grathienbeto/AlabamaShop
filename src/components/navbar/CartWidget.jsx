import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const cart = <FontAwesomeIcon icon={faCartShopping} className="fa-l cart" />;

// Boton del carrito, agregado de FontAwesome
const CartWidget = () => {
  return (
    <>
      <a href="index.html" className="cart">{cart}</a>
    </>
  );
};

export default CartWidget;
