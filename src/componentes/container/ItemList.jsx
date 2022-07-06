import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";
import { useState, useEffect } from 'react';
import Detail from './Detail';



const ItemList = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        gFetch /* aca simula un llamado a una api */
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    
    return(
        <div>{loading ? /*aca usa ternario, una suerte de IF con el signo ? y el signo :*/
        <h2>Cargando ...</h2>
        :
        
        <Detail/> 
    }
</div>
)
}

export default ItemList