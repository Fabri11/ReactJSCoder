import React from "react";
import '../ItemDetail/style.css'
import { useState } from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {

    const [productAgregado, setProductAgregado] = useState(null);

    const onAdd=(cant)=>{
        setProductAgregado(cant)
    }

    return (
        <>
            <Card id="CardDetail" className="bg-dark text-white" >
                <Container className="mb-6">
                    <Row >
                        <Col className="p-0">
                            <Card.Img className="imgCard" style={{maxWidth: "100%"}} src={product.pictureURL} variant="top" alt="Image" />
                        </Col>
                        <Col>
                            <Card.Body className="bodyCardSec">
                                <Card.Title className="bodyTitle">{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text className="bodyPrice">{product.price}</Card.Text>
                                {productAgregado ?
                                    <div><Link to='/cart'><button>Ir al Carrito</button></Link></div>
                                        :
                                    <ItemCount onAdd={onAdd} product={product.stock}/>}
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    )
}