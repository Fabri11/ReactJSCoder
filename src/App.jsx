import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {CarouselBan} from './components/Carousel/Carousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState(0);
  function addCart(c) {
    setCart(cart + c);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Row>
            <Col>
              <NavBar cart={cart}/>
            </Col>
          </Row>
        </header>
        <CarouselBan/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
