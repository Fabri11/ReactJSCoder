import React from "react";
import '../ItemDetail/style.css'
import { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ product }) => {
  const { cart } = useContext(CartContext)

  return (
    <>
      <Card id="CardDetail" className="bg-dark text-white" >
        <Container className="mb-6">
          <Row >
            <Col className="p-0">
              <Card.Img className="imgCard" style={{ maxWidth: "100%" }} src={product.pictureURL} variant="top" alt="Image" />
            </Col>
            <Col>
              <Card.Body className="bodyCardSec">
                <Card.Title className="bodyTitle">{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text className="bodyPrice">${product.price}</Card.Text>
                <Card.Text>stock: {product.stock}</Card.Text>
                <ItemCount product={product} />
                <Link to='/cart'><button className="btn btn-outline-secondary">Ir al Carrito</button></Link>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  )
}