import React from 'react';
import { useState, useEffect } from 'react'
import { gFetch } from "../helpers/getFetch";
import { Link, NavLink } from "react-router-dom";
import  ItemList  from "../container/ItemList";

/* const ItemListContainer = ({tituloITC, subTituloITC}) => {
 
    return(
        <div>
                <h3> {tituloITC} </h3>
                <p> {subTituloITC}  </p>
        </div>
    )

} (esto queda por las dudas)*/

const ItemListContainer = ({ greeting }) => {
    return (
        <ItemList/>
    )
}

export default ItemListContainer