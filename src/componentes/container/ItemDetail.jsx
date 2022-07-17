import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mercaderia } from "../helpers/ProductsNoFetch";
import {ItemCount} from "../container/ItemCount"
import { useContext } from 'react';
import { CartContext } from '../container/cartContext';




const ItemDetail = () => {

    const { id } = useParams();

    const singleProduct = mercaderia.find((product) => (product.id) === id);

    const [cart, agregarAlcarrito] = useContext(CartContext)
    const [cantidad, setCantidad] = useState();

    const functionCount = (contador)=>{
        console.log("el valor del contador es", contador)
       setCantidad(contador)
    }


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
            {cantidad? <Link to="/cart"><button>Terminar Compra</button></Link> : <ItemCount stock={5} initial={1} onAdd={functionCount} />}
        </section>


    )
}


export default ItemDetail