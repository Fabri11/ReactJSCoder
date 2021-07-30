import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col, Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextElement } from './context/CartContext';
import { CartComponent } from './components/Cart/Cart';
import {CarouselBan} from './components/Carousel/Carousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getFirestore } from './firebase-config/client';



function App() {

  useEffect(()=>{
    async function getData(){
      const db = getFirestore(); //conexion base de datos
      const Collection = db.collection("productos") //tomamos la coleccion

      const response = await Collection.get()
        console.log(response.docs.map(element=> element.data()));
    }
    getData();
  },[]);

return (
<div className="App">
  <CartContextElement>
    <BrowserRouter>
      <header>
        <Row>
          <Col>
          <NavBar />
          </Col>
        </Row>
      </header>
      <CarouselBan />
      <Switch>
        <Container>
          <Row>
            <h1>
              Ultimas ofertas
            </h1>
          </Row>
        </Container>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={CartComponent}/>
      </Switch>
    </BrowserRouter>
  </CartContextElement>
</div>
);
}

export default App;