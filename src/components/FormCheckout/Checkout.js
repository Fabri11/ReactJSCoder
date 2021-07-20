import { useContext } from "react";
import firebase from "firebase";
import { db } from "../../firebase/client";
import { CartContext } from "../../context/CartContext";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form'
import { Col, Row } from "react-bootstrap";

const CheckoutForm = () =>{
    const {cart, total, clear }= useContext(CartContext);

    async function updateItem(){
        const itemToUpdate = db.collection("productos")
        .where("id", cart.map(i => i.id));

        const query = await itemToUpdate.get();
        const batch = db.batch();
        const unavaible = [];

        cart.forEach(producto => {
            const item = query.docs.find(item => producto.id === item.data().id);
            if(item.data().stock >= producto.cant) {
                batch.update(item.ref, {stock: item.data().stock-producto.cant});
            } else{
                unavaible.push(producto)
            };
        });


        if (unavaible.length === 0){
            await batch.commit();
            return {status: 'Listo'}
        } else {
            return {status: 'Lo Siento, no hay Stock', unavaible}
        }
    }

    const finalizePurchase = async (cliente) =>{
        const sneakers = {
            cliente, items : cart, total: total(), date: firebase.firestore.FieldValue.serverTimestamp()
        }

        const reply = await db.collection('productos').add(sneakers);
        return reply;
    }

    const formCliente = async (e) =>{
        e.preventDeafult();

        const form = e.target;

    const clientData = {
        nombre: form['nombre'].value,
        apellido: form['apellido'].value,
        telefono:['telefono'].value,
        email:['email'].value,
    }
    const respuesta = await updateItem();
    if(respuesta.status === "Listo"){
        await finalizePurchase(clientData);

    form.reset();
    clear();
    }else{
        [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ))
    }
}
    

    return (
        <Form onSubmit={(e)=> formCliente(e)}>
            <Row>
                <Col>
                    <Form.Control placeholder="Nombre" />
                </Col>
                <Col>
                    <Form.Control placeholder="Apellido" />
                </Col>
                <Col>
                    <Form.Control placeholder="email@email.com" />
                </Col>
                <Col>
                    <Form.Control placeholder="Teléfono. ej:111-123345" />
                </Col>
            </Row>
        </Form>
    )
}

export default CheckoutForm;
