import Item from "./Item";

const ItemList = ({products}) => {
  
  return (

    <div className="ItemList mx-auto ">

      {products.map((product) => <Item product={product}/>)}

    </div>
    
  );
};

export default ItemList;
