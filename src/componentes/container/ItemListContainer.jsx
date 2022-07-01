import React from 'react';

 
const ItemListContainer = ({tituloITC, subTituloITC}) => {
 
    return(
        <div>
                <h3> {tituloITC} </h3>
                <p> {subTituloITC}  </p>
        </div>
    )

}


export default ItemListContainer