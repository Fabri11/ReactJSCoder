import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () =>{
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className= 'container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                            <img src='./logoJordan.png' className='mx-2' width='150'/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'/>
                            <li className='text-center'>
                                <a href='/'>Políticas de Privacidad</a>
                            </li>
                            <li className='text-center'>
                                <a href='/'>Quiénes somos</a>
                            </li>
                            <li className='text-center'>
                                <a href='/'>Ayuda</a>
                            </li>
                        </ul>
                        <div className="col-md text-md-center mt-4">
                            <ul className="social list-unstyled">
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://facebook.com">
                                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com                   ">
                                        <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://instagram.com">
                                        <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
                                    </a>
                                </li>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="copyright mt-5 pt-5">
                                            <p>
                                                <small>© 2021 Todos los derechos reservados.</small>
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