import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Context } from "../../context/cartContext";
import { useContext } from "react";

export const CheckOutForm = () => {
  // no es lo mas lindo que vas a ver en la vida, pero funciona
  const [comprador, setComprador] = useState([]);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [repetirEmail, setRepetirEmail] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [cp, setCp] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [cvc, setCvc] = useState("");

  const [finalizado, setFinalizado] = useState(null);
  const [detalle, setDetalle] = useState(null);
  const { carrito, total, clear } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const Comprador = {
    nombre,
    apellido,
    email,
    repetirEmail,
    dni,
    direccion,
    localidad,
    provincia,
    cp,
    telefono,
    tarjeta,
    cvc,
  };

  const actualizarStock = (id, stockNuevo) => {
    const updateStock = doc(db, "items", id);
    updateDoc(updateStock, { stock: stockNuevo });
  };

  const finalizarCompra = () => {
    const compraCollection = collection(db, "ventas");
    addDoc(compraCollection, {
      comprador,
      items: carrito,
      total,
      date: serverTimestamp(),
    }).then((res) => setFinalizado(res.id));

    carrito.forEach((item) =>
      actualizarStock(item.id, item.stock - item.cantidad)
    );
    clear();
  };

  return finalizado ? (
    <Container>
      <div>
        <h3>Gracias por su compra!</h3>
        <h4>
          El ID de su compra es <span className="text-info">{finalizado}</span>
        </h4>
      </div>
      <div>
        <h3>El detalle de su compra:</h3>
        <Container  >
          {detalle.map((item) => (
            <div className="d-flex gap-5">
              <p>{item.name}</p>
              <p>{item.cantidad} un.</p>
              <p>${item.cantidad * item.precio}</p>
            </div>
          ))}
        </Container>
      </div>
    </Container>
  ) : (
    <Container>
      <Form onSubmit={handleSubmit} className="w-50 m-auto text-center">
        <h2>CheckOut Form</h2>
        {/* Nombre */}
        <label htmlFor="nombre">
          Nombre
          <input
            required
            type="text"
            id="nombre"
            name="nombre"
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>

        {/* Apellido */}
        <label htmlFor="apellido">
          Apellido
          <input
            required
            type="text"
            id="apellido"
            name="apellido"
            onChange={(event) => setApellido(event.target.value)}
          />
        </label>

        {/* Correo Electr??nico */}
        <label htmlFor="email">
          Correo Electr??nico
          <input
            required
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {/* Correo Electr??nico */}
        <label htmlFor="repetirEmail">
          Repetir Correo Electr??nico
          <input
            className=""
            required
            type="repetirEmail"
            id="repetirEmail"
            name="repetirEmail"
            onChange={(event) => setRepetirEmail(event.target.value)}
          />
        </label>

        {/* DNI*/}
        <label htmlFor="dni">
          D.N.I.
          <input
            required
            type="number"
            id="dni"
            name="dni"
            onChange={(event) => setDni(event.target.value)}
          />
        </label>

        {/* Direccion */}
        <label htmlFor="direccion">
          Direccion
          <input
            required
            type="text"
            id="direccion"
            name="direccion"
            onChange={(event) => setDireccion(event.target.value)}
          />
        </label>

        {/* Localidad */}
        <label htmlFor="ciudad">
          Localidad
          <input
            required
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={(event) => setLocalidad(event.target.value)}
          />
        </label>

        {/* Provincia */}
        <label htmlFor="provincia">
          Provincia
          <input
            required
            type="text"
            id="provincia"
            name="provincia"
            onChange={(event) => setProvincia(event.target.value)}
          />
        </label>

        {/* Codigo Postal*/}
        <label htmlFor="cp">
          Codigo Postal
          <input
            required
            type="number"
            id="cp"
            name="cp"
            onChange={(event) => setCp(event.target.value)}
          />
        </label>

        {/* Telefono*/}
        <label htmlFor="telefono">
          Telefono
          <input
            required
            type="number"
            id="telefeno"
            name="telefono"
            onChange={(event) => setTelefono(event.target.value)}
          />
        </label>

        {/* Tarjeta*/}
        <label htmlFor="tarjeta">
          Tarjeta
          <input
            placeholder="No coloque espacios"
            maxLength={12}
            required
            type="number"
            id="tarjeta"
            name="tarjeta"
            onChange={(event) => setTarjeta(event.target.value)}
          />
        </label>

        {/* CdS */}
        <label htmlFor="cvc">
          Codigo de seguridad
          <input
            maxLength={3}
            required
            type="number"
            id="cvc"
            name="cvc"
            onChange={(event) => setCvc(event.target.value)}
          />
        </label>

        {email === repetirEmail ? null : (
          <div className="fs-5 text-danger my-3">
            Las direcciones de correo no concuerdan, por favor verifique
          </div>
        )}

        {email === repetirEmail &&
        Object.values(Comprador).every((dato) => dato !== "") ? (
          <Button
            onClick={() => {
              setDetalle(carrito);
              setComprador(Comprador);
              finalizarCompra();
            }}
            variant="outline-dark"
            className="w-75 my-3"
            type="submit"
            value="SUBMIT"
          >
            SUBMIT
          </Button>
        ) : (
          <Button
            disabled
            variant="outline-dark"
            className="w-75 my-3"
            type="submit"
            value="SUBMIT"
          >
            SUBMIT
          </Button>
        )}
      </Form>
    </Container>
  );
};
