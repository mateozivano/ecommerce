import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";
import { useState, useEffect } from 'react';

const Item = () => {
    const [products, setProducts] = useState([])
  



    useEffect(() => {
        gFetch 
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            
    }, [])

    return (<div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    }}>{products.map(prod => <div key={prod.id} className='col-md-4 p-1'>
        <div className="card w-100 mt-5" >
            <div className="card-header">
                {`${prod.name} - ${prod.categoria}`}
            </div>
            <div className="card-body" style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>

                <img src={prod.foto} height="200" width="140" alt='' className='w-50' />
                {prod.stock}
                <p>{prod.price}</p>

            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">
                    <Link to={{ pathname: `/item/${prod.id}`, state: prod.id }}> detalle del producto </Link>
                </button>
            </div>
        </div>
    </div>)}</div>
    )
}





export default Item