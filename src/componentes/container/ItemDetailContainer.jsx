import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { gFetch } from "../helpers/getFetch";
import { Link, NavLink } from "react-router-dom";
import ItemDetail from "../container/ItemDetail";

const ItemDetailContainer = () => {


    const { CategoriaId } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    console.log(CategoriaId)
    useEffect(() => {
        if (CategoriaId) {
            gFetch /* aca simula un llamado a una api */
                .then(resp => setProducts(resp.find(prod => prod.categoria == CategoriaId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            gFetch /* aca simula un llamado a una api */
                .then(resp => setProducts(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [CategoriaId])

    return (
        <div>{loading ? /*aca usa ternario, una suerte de IF con el signo ? y el signo :*/
            <h2>Cargando ...</h2>
            :

            <ItemDetail />
        }
        </div>




    )
}

export default ItemDetailContainer