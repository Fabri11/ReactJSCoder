import React, { useContext } from 'react';
import '../Cart/cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CheckoutForm from '../FormCheckout/Checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBoxOpen, faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import { ItemCountCart } from '../itemCountCart/itemCountCart';


export const CartComponent = () => {
  const { cart, clear, deleteProduct, total } = useContext(CartContext);

  return (
    cart.length
      ? <div className="container border border-white d-flex h-100 flex-column align-items-center bg-dark text-white">
        <div>
          <Card.Title className='textCompras' >Carrito De Compras<FontAwesomeIcon icon={faCartArrowDown}/></Card.Title>
        </div>
        {
          cart.map(
            product => {
              return (
                <Card id='cardConteiner' key={product.id} className="bg-dark border border-secondary text-white m-2 d-flex flex-row">
                  <Card.Img style={{padding:'4px', borderRadius: '4px', width: '12rem', height: '12rem'}} src={product.pictureURL} alt="Card image" />
                  <Card.Body>
                    <div>
                      <Card.Title className='titleCart'>{product.title}</Card.Title>
                    </div>
                    <div>
                      <Card.Text className='stockCart' >Stock: {product.stock}</Card.Text>
                    </div>
                    <div>
                      <Card.Text>Unidades seleccionadas: {product.cant}</Card.Text>
                    </div>
                    <div>
                      <Card.Text className='itemCountCant'><ItemCountCart product={product}/></Card.Text>
                    </div>
                    <div>
                      <Card.Text className='priceCart'>Precio por Un: ${product.price}</Card.Text>
                    </div>
                  </Card.Body>
                  <Button className='trashButtom' height='10px' onClick={() => deleteProduct(product.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                </Card>
              )
            }
          )
        }
        <div><h3>TOTAL: ${total()}</h3></div>
        <CheckoutForm />
          <div style={{margin:'10px'}}>
            <Button className=' border border-secondary vaciarCarrito' style={{margin:'8px'}} onClick={clear} variant="danger">Vaciar Carrito</Button>
            <Link to='/'>
              <Button className='border border-secondary text-white' style={{margin:'8px'}} variant='primary'>Seguir Comprando</Button>
            </Link>
          </div>
        </div>
      : <Card>
          <Card.Body id='containerCarrito' className="container  d-flex h-100 flex-column align-items-center bg-dark text-white" >
            <div>
              <Card.Title className='textCompras' >Carrito De Compras<FontAwesomeIcon icon={faCartArrowDown}/></Card.Title>
            </div>
            <div>
              <Card.Text>
                <button className='btn btn-light'><Link style={{textDecoration:'none'}} to="/">Comprar Ahora <FontAwesomeIcon icon={faBoxOpen}/></Link></button>
              </Card.Text>
            </div>
          </Card.Body>
        </Card> 
      
  )
}