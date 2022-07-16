import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mercaderia } from "../helpers/ProductsNoFetch";





const ItemDetail = () => {

    const { id } = useParams();

    const singleProduct = mercaderia.find((product) => (product.id) === id);


    return (
        <section className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>{singleProduct.categoria} {singleProduct.name}</h1>
                    <img className='img-fluid' src={singleProduct.foto} height="400" width="280" alt='Imagen de producto' />
                </div>

                <div className='col-md-6' style={{
                    marginTop:"50px",
                }}>
                    <h2>{singleProduct.price}</h2>
                    <p>datos/medio de pago</p>
                    <button>Añadir al carrito</button>
                    
                </div>

                    <p>Este {singleProduct.categoria} posee x cualidades</p>
            </div>
        </section>


    )
}


export default ItemDetail