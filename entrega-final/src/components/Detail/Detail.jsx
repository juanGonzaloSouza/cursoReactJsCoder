import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import './Detail.css'
import {ItemCount} from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"



export const Detail = ({product}) =>{


    const { addToCart }  = useContext(CartContext)

        function onAdd(cantidad){
            addToCart( { product , cantidad } )
        }


    return (
    <Container>             
        <Row className="detalle">
            
            <Col>
            <figure className="detalle-img"><img src={product.img} alt="foto producto" /></figure>
            </Col>

            <Col>
                <div className="detalle-info">
                    <h2 className="detalle-titulo">{product.name}</h2>
                    <p  className="detalle-descrip"> {product.description} </p>
                    <p  className="detalle-cat"> <span>Categoria:</span> {product.categoria}</p>
                    <p  className="detalle-stock"> <span>Unidades:</span> {product.stock}</p>  
                    <p  className="detalle-precio"> ${product.price}</p>
                </div>    

                 <ItemCount initial={1} stock={10} onAdd={onAdd} />         
            </Col>
                      
         </Row>
    
    </Container>
    )
    }