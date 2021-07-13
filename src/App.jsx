import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartComponent } from './context/CartContext';
import {CarouselBan} from './components/Carousel/Carousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

return (
<div className="App">
  <CartComponent>
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
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  </CartComponent>
</div>
);
}

export default App;