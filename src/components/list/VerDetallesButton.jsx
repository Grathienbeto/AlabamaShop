import { Link } from "react-router-dom";

const VerDetalles = ({ info }) => {
  return <Link to={"/item/" + info.id}>Ver detalles</Link>;
};

export default VerDetalles;
