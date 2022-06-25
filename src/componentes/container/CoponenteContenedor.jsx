import React from 'react';
import Titulo from '../container/titulo';
 
const ComponenteContenedor = () => {
    let titulo ="Nombre de articulo" ;
    let subtitulo = "Precio de articulo";
    return(
        <div>
            <Titulo titulo={titulo} subtitulo={subtitulo} />

        </div>
     )
}




export default ComponenteContenedor