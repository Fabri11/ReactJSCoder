import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// html donde se visualiza el resultado

export const Item = ({product}) => {
    return(
        <>
            <div style={{margin:"55px"}} className="card text-center bg-dark mb-4 col-3">
                    <img className="mb-2" style={{margin: "10px"}} src={product.pictureURL} alt=""></img>
                    <div className="card-body text-light">
                        <h4 className="card-title">{product.title}</h4>
                        <h3 className="card-price">{product.price}</h3>
                        <Link style={{textAlign:"center"}} to={`/item/${product.id}`}>Ver Más</Link>
                    </div>
            </div>
        </>
    )
}

