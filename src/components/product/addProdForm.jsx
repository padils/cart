import React from 'react';
import style from './addProd.module.css'

let AddProdForm = (props) => {
   
     let setPrice = e =>(e>=0) && props.editPrice(e);

    return (
        <div className={style.div}>
            <div><input
                onChange={e => props.editName(e.target.value)}
                placeholder='product name'
                value={props.name} 
                />
            </div>

            <div><input
                onChange={e => setPrice(e.target.value)}
                placeholder='product price'
                value={props.price} 
                type='number'
                />
            </div>
        </div>
    )
}
export default AddProdForm
