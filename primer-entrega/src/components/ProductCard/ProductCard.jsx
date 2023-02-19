const ProductCard = ({ title, description, img, price, stock }) => {
      
        return (
          stock ? (
          <div>
            <h1> {title} </h1>
            <img src={img} alt="Imagen de producto" />
            <h2> {price} </h2>
            <p> {description} </p>
            <p> {stock}</p>
          </div>
        ) : <h3>No hay stock de {title}</h3>
        ); 
};

export default ProductCard;
