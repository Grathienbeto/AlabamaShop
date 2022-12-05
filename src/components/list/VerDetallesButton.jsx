import { Link } from "react-router-dom";

const VerDetalles = ({ info }) => {
  return (
    <div className="detallesButtonDiv">
      <Link to={"/item/" + info.id} className="detallesButton">Ver detalles</Link>
    </div>
  );
};

export default VerDetalles;
