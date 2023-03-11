
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();

  const description = product.description.slice(0, 30);
  const title = product.title.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }
    return (
      <div>
        <div>
          <div
            onClick={handleNavigate}
            className="productoAlineacion py-3 my-3"
          >
            <Card
              style={{ width: "18rem", border: "solid gold" }}
              className="carta"
            >
              <Card.Img
                variant="top"
                className="imagen__alto"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>
                  {product.title.length > 20 ? `${title} ...` : product.title}
                </Card.Title>
                <Card.Text>
                  <div>
                    <p className="mb-2">
                      {product.description.length > 30
                        ? `${description} ...`
                        : product.description}
                    </p>
                    <h4>${product.price}</h4>
                    <span className="text-xs">
                      {quantityAdded ? "Agregados" : "En Stock"}:{" "}
                      {quantityAdded || product.stock}
                    </span>
                  </div>
                </Card.Text>
                <Button className="botonDetalle">
                  <Link
                    to={`/item/${product.id}`}
                    className="links px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    COMPRAR
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  };
  
export default Item;
  


