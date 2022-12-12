const ItemCount = ({ handleBotones, counts, onAdd, nuevoStock }) => {
  return (
    <div className="stockDiv">
      {nuevoStock > 0 ? (
        <>
          <div>
            <h2 className="stock">Stock: {nuevoStock}</h2>
          </div>
          <div className="cantidadDeItems">
            <button
              className="countBotton"
              onClick={() => handleBotones("resta")}
            >
              -
            </button>

            <span>{counts}</span>

            <button
              className="countBotton"
              onClick={() => handleBotones("suma")}
            >
              +
            </button>
          </div>
        </>
      ) : (
        <h2>No hay Stock</h2>
      )}

      {/* Boton habilitado cuando hay stock, desabilitado cuando no lo hay */}
      <div>
        {nuevoStock > 0 ? (
          <button className="comprarBotton" onClick={onAdd}>
            Agregar al carrito
          </button>
        ) : (
          <button className="sinStockBotton" disabled>
            No hay disponibilidad
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
