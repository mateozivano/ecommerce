import React from 'react';
import { Link, NavLink, useParams } from "react-router-dom";
import { gFetch } from "../helpers/getFetch";
import { useState, useEffect } from 'react';
import Detail from './Detail';



const ItemList = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()


    useEffect(() => {
        if (categoriaId) {
            gFetch /* aca simula un llamado a una api */
            .then(resp => setProducts(resp.filter( prod => prod.categoria == categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    } else {
        gFetch /* aca simula un llamado a una api */
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }
}, [categoriaId])

    
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