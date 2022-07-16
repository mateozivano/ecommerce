import React from 'react';
import { useState, useEffect } from 'react'
import { gFetch } from "../helpers/getFetch";
import { Link, NavLink, useParams } from "react-router-dom";
import  ItemList  from "../container/ItemList";



const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        if(id){
        gFetch
        .then((data)=>{
            setProductos(data.filter(p=>p.categoria === id))
        })
        }else{
            gFetch
            .then((data)=> setProductos(data))
            .catch((err)=> console.log(err))
        }
    },[id])

    return (
        <section className='itemlistcontainer'>
            <h2>{greeting}</h2>
            <ItemList/>
        </section>
    )
}

export default ItemListContainer