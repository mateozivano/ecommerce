import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const ItemDetail = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        gFetch /* aca simula un llamado a una api */
            .then(resp => setProducts(resp.find(prod => prod.categoria === categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    
    return(
        <div>
        {products.map(product => <div>{`${product.name}`}</div>
)}
        
        </div>
            
        

    )
}


export default ItemDetail