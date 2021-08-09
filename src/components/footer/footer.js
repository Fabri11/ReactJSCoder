import React from 'react';
import './footer.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export const Footer = () =>{
    return(
        // TODO: PONER FOOTER CON IMAGEN INTELIGENTE!!!
        <div className='containerPrinc'>
            <footer className='text-white py-4 bg-dark'>
                <div className= 'container'>
                    <nav className='row'>
                        <Link to='/' style={{textDecoration: 'none'}} className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src='/descarga.png' rounded />
                                </Col>
                            </Row>
                        </Container>
                        </Link>
                        <ul id='infoAdicional' className='col-12 col-md-6 list-unstyled'>
                            <li className='font-weight-bold mb-2'/>
                            <li className='text-center' style={{marginBottom:'30px'}}>
                                <a style={{textDecoration: 'none'}} className='text text-secondary' href='/'>Políticas de Privacidad</a>
                            </li>
                            <li className='text-center' style={{marginBottom:'30px'}}>
                                <a style={{textDecoration: 'none'}} className='text text-secondary' href='/'>Quiénes somos</a>
                            </li>
                            <li className='text-center'>
                                <a style={{textDecoration: 'none'}} className='text text-secondary' href='/'>Ayuda</a>
                            </li>
                        </ul>
                        <div id='containerSocial ' className="col-md text-md-center mt-4">
                            <ul className="social list-unstyled">
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fa.bri.754">
                                        <FontAwesomeIcon className='text text-secondary' style={{margin:'5px'}} size='2x' icon={faFacebookF} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Fabriisabella">
                                        <FontAwesomeIcon className='text text-secondary' style={{margin:'5px'}} size='2x' icon={faTwitter} />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fabrisabella/">
                                        <FontAwesomeIcon className='text text-secondary' style={{margin:'5px'}} size='2x' icon={faInstagram} />{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div id='copyright' className="copyright text-align-center mt-5 pt-5">
                                    <p>
                                        <hr className='text text-secondary'/>
                                            <small className='text text-secondary'>© 2021 Todos los derechos reservados.</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </footer>
        </div> 
    )
}