import React from 'react';
import { useState, useEffect } from 'react'
import { gFetch } from "../helpers/getFetch";
 
/* const ItemListContainer = ({tituloITC, subTituloITC}) => {
 
    return(
        <div>
                <h3> {tituloITC} </h3>
                <p> {subTituloITC}  </p>
        </div>
    )

} (esto queda por las dudas)*/

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
   
    

    useEffect(() => {
        gFetch /* aca simula un llamado a una api */
        .then(resp => setProducts(resp))
        .catch( err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

return (
        <div>
           { loading ? /*aca usa ternario, una suerte de IF*/ 
                <h2>Cargando ...</h2> 
            : 
                products.map(prod =>   <div key={prod.id} className='col-md-4 p-1'>                    
                                            <div className="card w-100 mt-5" >
                                                <div className="card-header">
                                                    {`${prod.name} - ${prod.categoria}`}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' className='w-50' />
                                                    {prod.stock}                                                            
                                                </div>
                                                <div className="card-footer">                                               
                                                    <button className="btn btn-outline-primary btn-block">
                                                        detalle del producto
                                                    </button>                                               
                                                </div>
                                            </div>                                                                                                                            
                                        </div> ) 
            }
        </div>
    )
}







export default ItemListContainer