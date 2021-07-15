import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


export const CartComponent = () => {
    const {cart, clear, deleteProduct, total} = useContext(CartContext);

    return(
        cart.lenght ?
            <div>
                {cart.map(product=>{
                    return(
                        <Card key={product.id} className="bg-dark text-white">
                            <Card.Img src={product.pictureURL} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.stock}</Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                <button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
                            </Card.ImgOverlay>
                        </Card>
                    )
                })}
                <div>{total()}</div>
                    <Button onClick={clear} variant="danger">Vaciar</Button>
                </div>
                :
                <div><Link to="/">Seguir Comprando</Link></div>



    )
}