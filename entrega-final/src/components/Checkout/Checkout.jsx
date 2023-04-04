import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Checkout.css'

export const Checkout = () =>{


    return (
        <Container>
            <Row>
                <Col>
                <h2>
                    gracias por tu compra !!!
                </h2>
                <Link to='/'>
                <Button className="btn volver">Seguir comprando</Button>
                </Link>
                </Col>
            </Row>
        </Container>
    )
}
