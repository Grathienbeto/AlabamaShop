const ItemListContainer = ({ name, precio, stock }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{precio}</h2>
        <h3>{stock}</h3>
      </div>
    </div>
  );
};

export default ItemListContainer;
